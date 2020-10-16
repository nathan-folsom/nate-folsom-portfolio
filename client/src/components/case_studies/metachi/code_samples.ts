export const codeSamples = {
    pageStateService: [
        {
            __html: 'interface Effect&lt;T&gt; {<br>' +
                '<div class="tab-1">matcher: string[];<br></div>' +
                '<div class="tab-1">cb: StatefulCallback&lt;T&gt;;<br></div>' +
                '}<br>' +
                '<br>' +
                'type StatefulCallback&lt;T&gt; = (url: string[]) => T;<br>' +
                'type StatelessCallback = () => void;<br>' +
                '<br>' +
                '@Injectable({<br>' +
                '<div class="tab-1">providedIn: \'root\'<br></div>' +
                '})<br>' +
                'export class PageStateFromUrlService {<br>' +
                '<div class="tab-1">private urlHandler: UrlHandler&lt;any&gt;;<br></div>' +
                '<div class="tab-1">private baseRoute: string;<br></div>' +
                '<div class="tab-1">private urls$: Observable&lt;string[]&gt;;<br></div>' +
                '<br>' +
                '<div class="tab-1">constructor(private router: Router) {}<br></div>' +
                '<br>' +
                '<div class="tab-1">public register = &lt;T&gt;(<br></div>' +
                '<div class="tab-2">componentBaseRoute: string,<br></div>' +
                '<div class="tab-2">defaultState: T,<br></div>' +
                '<div class="tab-2">effects: Effect&lt;T&gt;[],<br></div>' +
                '<div class="tab-2">statelessEffects?: StatelessCallback[]<br></div>' +
                '<div class="tab-1">): Observable&lt;T&gt; => {<br></div>' +
                '<div class="tab-2">this.baseRoute = componentBaseRoute;<br></div>' +
                '<div class="tab-2">this.parseUrl();<br></div>' +
                '<div class="tab-2">this.urlHandler = new UrlHandler&lt;T&gt;(this.urls$, defaultState, effects, statelessEffects);<br></div>' +
                '<div class="tab-2">return this.urlHandler.getState$();<br></div>' +
                '<div class="tab-1">}<br></div>' +
                '<br>' +
                '<div class="tab-1">protected parseUrl = () => {<br></div>' +
                '<div class="tab-2">this.urls$ = this.getEvents().pipe(<br></div>' +
                '<div class="tab-3">map((c: string) => this.getRoutes(c)),<br></div>' +
                '<div class="tab-3">map((url) => this.getChildRoutes(url))<br></div>' +
                '<div class="tab-2">);<br></div>' +
                '<div class="tab-1">}<br></div>' +
                '<br>' +
                '<div class="tab-1">protected getEvents = () => {<br></div>' +
                '<div class="tab-2">return this.router.events.pipe(<br></div>' +
                '<div class="tab-3">filter((e) => e instanceof NavigationEnd),<br></div>' +
                '<div class="tab-3">map((e) => (e as NavigationEnd).url),<br></div>' +
                '<div class="tab-3">startWith(this.baseRoute),<br></div>' +
                '<div class="tab-2">);<br></div>' +
                '<div class="tab-1">}<br></div>' +
                '<br>' +
                '<div class="tab-1">protected getRoutes = (url: string): string[] => {<br></div>' +
                '<div class="tab-2">const split = url.split(\'/\');<br></div>' +
                '<div class="tab-2">return split.slice(split.indexOf(this.baseRoute));<br></div>' +
                '<div class="tab-1">}<br></div>' +
                '<br>' +
                '<div class="tab-1">protected getChildRoutes = (url: string[]): string[] => {<br></div>' +
                '<div class="tab-2">try {<br></div>' +
                '<div class="tab-3">return url.slice(1);<br></div>' +
                '<div class="tab-2">} catch {<br></div>' +
                '<div class="tab-3">return [\'\'];<br></div>' +
                '<div class="tab-2">}<br></div>' +
                '<div class="tab-1">}<br></div>' +
                '}'
        },
        {
            __html: 'class UrlHandler<T> {<br>' +
                '<div class="tab-1">private urls$: Observable&lt;string[]&gt;;<br></div>' +
                '<div class="tab-1">private effects: Effect&lt;T&gt;[] = [];<br></div>' +
                '<div class="tab-1">private statelessEffects: StatelessCallback[] = [];<br></div>' +
                '<div class="tab-1">private readonly defaultState: T;<br></div>' +
                '<br>' +
                '<div class="tab-1">constructor(urls$: Observable&lt;string[]&gt;, defaultState: T, effects: Effect&lt;T&gt;[], statelessEffects?: StatelessCallback[]) {<br></div>' +
                '<div class="tab-2">this.urls$ = urls$;<br></div>' +
                '<div class="tab-2">this.defaultState = defaultState;<br></div>' +
                '<div class="tab-2">this.statelessEffects = statelessEffects;<br></div>' +
                '<div class="tab-2">this.effects = this.putWildcardEffectsLast(effects);<br></div>' +
                '<div class="tab-1">}<br></div>' +
                '<br>' +
                '<div class="tab-1">protected putWildcardEffectsLast = (effects: Effect&lt;T&gt;[]) =><br></div>' +
                '<div class="tab-2">[...effects.filter((e) => e.matcher.indexOf(\'*\') < 0), ...effects.filter((e) => e.matcher.indexOf(\'*\') >= 0)]<br></div>' +
                '<br>' +
                '<div class="tab-1">public getState$ = () => this.urls$.pipe(<br></div>' +
                '<div class="tab-2">map((url) => this.applyEffects(url))<br></div>' +
                '<div class="tab-1">)<br></div>' +
                '<br>' +
                '<div class="tab-1">protected applyEffects = (url: string[]): T => {<br></div>' +
                '<div class="tab-2">let state: T;<br></div>' +
                '<div class="tab-2">this.applyStatelessEffect();<br></div>' +
                '<div class="tab-2">this.effects.forEach((e) => {<br></div>' +
                '<div class="tab-3">if (this.matches(e.matcher, url)) {<br></div>' +
                '<div class="tab-4">state = state ? state : (e.cb as StatefulCallback&lt;T&gt;)(url);<br></div>' +
                '<div class="tab-3">}<br></div>' +
                '<div class="tab-2">});<br></div>' +
                '<div class="tab-2">return state || this.defaultState;<br></div>' +
                '<div class="tab-1">}<br></div>' +
                '<br>' +
                '<div class="tab-1">protected applyStatelessEffect = () => this.statelessEffects.forEach((cb) => cb());<br></div>' +
                '<br>' +
                '<div class="tab-1">protected matches = (matcher: string[], url: string[]): boolean => {<br></div>' +
                '<div class="tab-2">if (matcher.length === 0 || matcher.length !== url.length) {<br></div>' +
                '<div class="tab-3">return false;<br></div>' +
                '<div class="tab-2">}<br></div>' +
                '<div class="tab-2">let match = true;<br></div>' +
                '<div class="tab-2">matcher.forEach((m, i) => {<br></div>' +
                '<div class="tab-3">match = match ? url[i] === m || m === \'*\' : false;<br></div>' +
                '<div class="tab-2">});<br></div>' +
                '<div class="tab-2">return match;<br></div>' +
                '<div class="tab-1">}<br></div>' +
                '}'
        },
        {
            __html: 'enum UiState {<br>' +
                '<div class="tab-1">DEFAULT = \'default\',<br></div>' +
                '<div class="tab-1">STATE1 = \'state1\',<br></div>' +
                '<div class="tab-1">STATE2 = \'state2\',<br></div>' +
                '}<br>' +
                '<br>' +
                '@Component({<br>' +
                '<div class="tab-1">template: `<br></div>' +
                '<div class="tab-2">&lt;ng-container *ngIf="currentState$ | async as state else error"&gt;<br></div>' +
                '<div class="tab-3">&lt;p *ngIf="state === uiState.DEFAULT">Default Display&lt;/p&gt;<br></div>'+
                '<div class="tab-3">&lt;p *ngIf="state === uiState.STATE1">State 1&lt;/p&gt;<br></div>'+
                '<div class="tab-3">&lt;p *ngIf="state === uiState.STATE2">State 2&lt;/p&gt;<br></div>'+
                '<div class="tab-2">&lt;/ng-container&gt;<br></div>'+
                '<div class="tab-2">&lt;ng-template #error&gt;<br></div>'+
                '<div class="tab-3">&lt;p>Whoops&lt;/p&gt;<br></div>'+
                '<div class="tab-2">&lt;/ng-template&gt;<br></div>' +
                '<div class="tab-1">`<br></div>' +
                '})<br>' +
                'export class ExampleComponent implements OnInit {<br>' +
                '<div class="tab-1">uiState = UiState;<br></div>' +
                '<div class="tab-1">currentState$: Observable&lt;UiState&gt;;<br></div>' +
                '<br>' +
                '<div class="tab-1">constructor(private stateService: PageStateFromUrlService) { }<br></div>' +
                '<br>' +
                '<div class="tab-1">ngOnInit() {<br></div>' +
                '<div class="tab-2">this.currentState$ = this.stateService.register(<br></div>' +
                '<div class="tab-3">\'example\',<br></div>' +
                '<div class="tab-3">UiState.DEFAULT, [<br></div>' +
                '<div class="tab-4">{matcher: [\'route\'], cb: this.statefulEffect},<br></div>' +
                '<div class="tab-4">{matcher: [\'route\', \'*\'], cb: () => UiState.STATE2},<br></div>' +
                '<div class="tab-3">], [<br></div>' +
                '<div class="tab-4">this.statelessEffect,<br></div>' +
                '<div class="tab-3">]<br></div>' +
                '<div class="tab-2">);<br></div>' +
                '<div class="tab-1">}<br></div>' +
                '<br>' +
                '<div class="tab-1">statefulEffect = (urls: string[]) => {<br></div>' +
                '<div class="tab-2">console.log(urls);<br></div>' +
                '<div class="tab-2">return UiState.STATE1;<br></div>' +
                '<div class="tab-1">}<br></div>' +
                '<br>' +
                '<div class="tab-1">statelessEffect = () => console.log(\'url changed\');<br></div>' +
                '}'
        }
    ]
}