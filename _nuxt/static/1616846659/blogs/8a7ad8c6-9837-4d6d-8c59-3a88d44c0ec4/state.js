window.__NUXT__=(function(a,b,c,d,e,f,g,h,i,j,k){return {staticAssetsBase:"\u002F_nuxt\u002Fstatic\u002F1616846659",layout:"default",error:f,state:{appBarColor:h,appTitleColor:h},serverRendered:g,routePath:"\u002Fblogs\u002F8a7ad8c6-9837-4d6d-8c59-3a88d44c0ec4",config:{app:{basePath:"\u002F",assetsPath:"\u002F_nuxt\u002F",cdnURL:f}},apollo:{defaultClient:Object.create(null,{"blog:8a7ad8c6-9837-4d6d-8c59-3a88d44c0ec4":{writable:true,enumerable:true,value:{id:"8a7ad8c6-9837-4d6d-8c59-3a88d44c0ec4",slug:"Frontend Gobal Stores",content:"\u003Ch2\u003EGlobal Stores\u003C\u002Fh2\u003E\n\u003Ch4\u003EMOBX: influenced by Object-Oriented Programming and Reactive\u003Cbr \u002F\u003EProgramming principles\u003C\u002Fh4\u003E\n\u003Cp\u003E\u003Cbr \u002F\u003E\u003Cspan style=\"font-size: 14pt;\"\u003E1) Mobx &mdash; smart observations based on a mutable state\u003C\u002Fspan\u003E\u003Cbr \u002F\u003E\u003Cspan style=\"font-size: 14pt;\"\u003E2) not so functional and have classes that contains updatable\u002Fmutable data\u003C\u002Fspan\u003E\u003Cbr \u002F\u003E\u003Cspan style=\"font-size: 14pt;\"\u003E3) ultra performant: only the components which consumes the properties gets updated\u003C\u002Fspan\u003E\u003Cbr \u002F\u003E\u003Cspan style=\"font-size: 14pt;\"\u003E4) requires a good knowledge of the API: @observable, @action\u003C\u002Fspan\u003E\u003Cbr \u002F\u003E\u003Cspan style=\"font-size: 14pt;\"\u003E5) Mobx is really opinionated and you should follow but in term of best performance, it is the way to go\u003C\u002Fspan\u003E\u003Cbr \u002F\u003E\u003Cspan style=\"font-size: 14pt;\"\u003E6) you don't see as much of when and how your data is being updated, and it may be harder to track through the application\u003C\u002Fspan\u003E\u003C\u002Fp\u003E\n\u003Cp\u003E\u003Cspan style=\"font-size: 14pt;\"\u003EConcept revolves around mainly four things\u003C\u002Fspan\u003E\u003Cbr \u002F\u003E\u003Cspan style=\"font-size: 14pt;\"\u003E1. Application State (Can be of any type like primitive type or referential type)\u003C\u002Fspan\u003E\u003Cbr \u002F\u003E\u003Cspan style=\"font-size: 14pt;\"\u003E2. Derivations ( Any values that depends upon the state or are computed through state)\u003C\u002Fspan\u003E\u003Cbr \u002F\u003E\u003Cspan style=\"font-size: 14pt;\"\u003E3. Computed are functions that run on state change in shot like derivations\u003C\u002Fspan\u003E\u003Cbr \u002F\u003E\u003Cspan style=\"font-size: 14pt;\"\u003E4. Reactions are similar to a computed value, but instead of producing a new value, a reaction produces a side effect for things like printing to the console, making network requests, incrementally updating the react component tree to patch the DOM, etc\u003C\u002Fspan\u003E\u003Cbr \u002F\u003E\u003Cspan style=\"font-size: 14pt;\"\u003E5. Actions are all the things that alter the state.\u003C\u002Fspan\u003E\u003C\u002Fp\u003E\n\u003Cp\u003E&nbsp;\u003C\u002Fp\u003E\n\u003Cp\u003E#EXAMPLE\u003C\u002Fp\u003E\n\u003Cpre class=\"language-javascript\"\u003E\u003Ccode\u003Eclass ObservableTodoStore {\n  @observable todos = [];\n  @observable pendingRequests = 0;\n  constructor() {\n    mobx.autorun(() =&gt; console.log(this.report));\n  }\n  @computed get completedTodosCount() {\n    return this.todos.filter((todo) =&gt; todo.completed === true).length;\n  }\n  @computed get report() {\n    if (this.todos.length === 0) return \"&lt;none&gt;\";\n    const nextTodo = this.todos.find((todo) =&gt; todo.completed === false);\n    return (\n      `Next todo: \"${nextTodo ? nextTodo.task : \"&lt;none&gt;\"}\". ` +\n      `Progress: ${this.completedTodosCount}\u002F${this.todos.length}`\n    );\n  }\n\n  addTodo(task) {\n    this.todos.push({\n      task: task,\n      completed: false,\n      assignee: null,\n    });\n  }\n}\nconst observableTodoStore = new ObservableTodoStore();\n\u002F\u002F component\n@observer\nclass TodoList extends React.Component {\n  render() {\n    const store = this.props.store;\n    return (\n      &lt;div&gt;\n        {\" \"}\n        {store.report}{\" \"}\n        &lt;ul&gt;\n          {\" \"}\n          {store.todos.map((todo, idx) =&gt; (\n            &lt;TodoView todo={todo} key={idx} \u002F&gt;\n          ))}{\" \"}\n        &lt;\u002Ful&gt;{\" \"}\n        {store.pendingRequests &gt; 0 ? &lt;marquee&gt; Loading... &lt;\u002Fmarquee&gt; : null}{\" \"}\n        &lt;button onClick={this.onNewTodo}&gt; New Todo &lt;\u002Fbutton&gt;{\" \"}\n        &lt;small&gt; (double - click a todo to edit) &lt;\u002Fsmall&gt; &lt;RenderCounter \u002F&gt;\n      &lt;\u002Fdiv&gt;\n    );\n  }\n  onNewTodo = () =&gt; {\n    this.props.store.addTodo(prompt(\"Enter a new todo:\", \"coffee plz\"));\n  };\n}\n\n@observer\nclass TodoView extends React.Component {\n  render() {\n    const todo = this.props.todo;\n    return (\n      &lt;li onDoubleClick={this.onRename}&gt;\n        &lt;input\n          type=\"checkbox\"\n          checked={todo.completed}\n          onChange={this.onToggleCompleted}\n        \u002F&gt;{\" \"}\n        {todo.task}{\" \"}\n        {todo.assignee ? &lt;small&gt; {todo.assignee.name} &lt;\u002Fsmall&gt; : null}{\" \"}\n        &lt;RenderCounter \u002F&gt;\n      &lt;\u002Fli&gt;\n    );\n  }\n  onToggleCompleted = () =&gt; {\n    const todo = this.props.todo;\n    todo.completed = !todo.completed;\n  };\n  onRename = () =&gt; {\n    const todo = this.props.todo;\n    todo.task = prompt(\"Task name\", todo.task) || todo.task;\n  };\n}\nReactDOM.render(\n  &lt;TodoList store={observableTodoStore} \u002F&gt;,\n  document.getElementById(\"reactjs-app\")\n);\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Ch3\u003ERECOILJS: mimics react hooks e.g useState\u003C\u002Fh3\u003E\n\u003Cp\u003E\u003Cbr \u002F\u003E\u003Cspan style=\"font-size: 14pt;\"\u003E1) state management library based on decentralized states (miultiple small atoms\u002Fstates)\u003C\u002Fspan\u003E\u003Cbr \u002F\u003E\u003Cspan style=\"font-size: 14pt;\"\u003E2) works well with React hooks and indeed it mimics the useState API with new names: useRecoilState.\u003C\u002Fspan\u003E\u003Cbr \u002F\u003E\u003Cspan style=\"font-size: 14pt;\"\u003E3) you can reuse states\u002Fatoms with selectors (almost a la Redux).\u003C\u002Fspan\u003E\u003Cbr \u002F\u003E\u003Cspan style=\"font-size: 14pt;\"\u003E4) consume and updates on any levels.\u003C\u002Fspan\u003E\u003Cbr \u002F\u003E\u003Cspan style=\"font-size: 14pt;\"\u003E5) At the moment, Recoil seems like a good compromise between simplicity and performance. It is a fine addition \u003C\u002Fspan\u003E\u003Cspan style=\"font-size: 14pt;\"\u003Eto React hooks and it is neither the worst nor the best in term of performance.\u003C\u002Fspan\u003E\u003Cbr \u002F\u003E\u003Cspan style=\"font-size: 14pt;\"\u003E6) It's experimental.\u003C\u002Fspan\u003E\u003C\u002Fp\u003E\n\u003Cp\u003E&nbsp;\u003C\u002Fp\u003E\n\u003Cpre class=\"language-javascript\"\u003E\u003Ccode\u003E\u002F\u002F state.js\nimport { atom } from \"recoil\";\n\u002F\u002F count here is passed to useRecoilState\nconst count = atom({\n  key: \"count\",\n  default: 0,\n});\nimport { selector, useRecoilState } from \"recoil\";\nconst isEvenCount = selector({\n  key: \"evenCount\",\n  get: ({ get }) =&gt; {\n    const state = get(count);\n    return state % 2 === 0;\n  },\n});\n\u002F\u002F Functional Component\nexport const Counter = () =&gt; {\n  const [countState, setCount] = useRecoilState(count);\n  \u002F\u002F see this 👇\n  const value = useRecoilValue(isEvenCount);\n};\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Ch3\u003E\u003Cbr \u002F\u003E\u003Cbr \u002F\u003EREDUX : influenced by Functional Programming principles:\u003C\u002Fh3\u003E\n\u003Cp\u003E\u003Cspan style=\"font-size: 14pt;\"\u003E1) Prevents unnecessary re-renders, as when the state changes it returns new state which uses shallow copy.\u003C\u002Fspan\u003E\u003Cbr \u002F\u003E\u003Cspan style=\"font-size: 14pt;\"\u003E2) Testing will be easy as UI and data management are separated.\u003C\u002Fspan\u003E\u003Cbr \u002F\u003E\u003Cspan style=\"font-size: 14pt;\"\u003E3) History of state is maintained which helps in implementing features like undo very easily. aka time travel \u003C\u002Fspan\u003E\u003Cspan style=\"font-size: 14pt;\"\u003Edebugging.\u003C\u002Fspan\u003E\u003Cbr \u002F\u003E\u003Cspan style=\"font-size: 14pt;\"\u003E4) It is most commonly used with React.\u003C\u002Fspan\u003E\u003Cbr \u002F\u003E\u003Cspan style=\"font-size: 14pt;\"\u003E5) As state is immutable in redux, the reducer updates the state by returning a new state every time which can \u003C\u002Fspan\u003E\u003Cspan style=\"font-size: 14pt;\"\u003Ecause excessive use of memory.\u003C\u002Fspan\u003E\u003Cbr \u002F\u003E\u003Cspan style=\"font-size: 14pt;\"\u003E6) Seperate modules\u002Fmiddleware for async work e.g redux-saga, redux-thunk and computed\u002Fderived props e.g \u003C\u002Fspan\u003E\u003Cspan style=\"font-size: 14pt;\"\u003Ereselect.\u003C\u002Fspan\u003E\u003Cbr \u002F\u003E\u003Cspan style=\"font-size: 14pt;\"\u003E7) It has large boilerplate code and restricted design.\u003C\u002Fspan\u003E\u003C\u002Fp\u003E\n\u003Cp\u003E&nbsp;\u003C\u002Fp\u003E\n\u003Cpre class=\"language-javascript\"\u003E\u003Ccode\u003Eimport { combineReducers, createStore } from \"redux\";\n\u002F\u002F actions.js\nexport const activateGeod = (geod) =&gt; ({\n  type: \"ACTIVATE_GEOD\",\n  geod,\n});\nexport const closeGeod = () =&gt; ({\n  type: \"CLOSE_GEOD\",\n});\n\u002F\u002F reducers.js\nexport const geod = (state = {}, action) =&gt; {\n  switch (action.type) {\n    case \"ACTIVATE_GEOD\":\n      return action.geod;\n    case \"CLOSE_GEOD\":\n      return {};\n    default:\n      return state;\n  }\n};\nexport const reducers = combineReducers({\n  geod,\n});\n\u002F\u002F store.js\nexport function configureStore(initialState = {}) {\n  const store = createStore(reducers, initialState);\n  return store;\n}\nexport const store = configureStore();\n\u002F\u002F COMPONENT USAGE\nimport React from \"react\";\nimport { connect } from \"react-redux\";\nimport { activateGeod, closeGeod } from \".\u002Fredux\";\n\u002F\u002F App.js\nexport class App extends React.Component {\n  render() {\n    return (\n      &lt;div&gt;\n        &lt;h1&gt;{this.props.geod.title || \"Hello World!\"}&lt;\u002Fh1&gt;\n        {this.props.geod.title ? (\n          &lt;button onClick={this.props.closeGeod}&gt;Exit Geod&lt;\u002Fbutton&gt;\n        ) : (\n          &lt;button\n            onClick={() =&gt;\n              this.props.activateGeod({ title: \"I am a geo dude!\" })\n            }\n          &gt;\n            Click Me!\n          &lt;\u002Fbutton&gt;\n        )}\n      &lt;\u002Fdiv&gt;\n    );\n  }\n}\n\u002F\u002F AppContainer.js\nconst mapStateToProps = (state) =&gt; ({\n  geod: state.geod,\n});\nconst mapDispatchToProps = {\n  activateGeod,\n  closeGeod,\n};\nconst AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);\nexport default AppContainer;\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Ch3\u003Eunstated-next\u003C\u002Fh3\u003E\n\u003Cp\u003E\u003Cbr \u002F\u003E\u003Cspan style=\"font-size: 14pt;\"\u003E1) It's 40x smaller than redux : ~200 bytes min+gz.\u003C\u002Fspan\u003E\u003Cbr \u002F\u003E\u003Cspan style=\"font-size: 14pt;\"\u003E2) it's easily integrated with every React library.\u003C\u002Fspan\u003E\u003Cbr \u002F\u003E\u003Cspan style=\"font-size: 14pt;\"\u003E3) It's minimal. It's just React and takes 5 minutes to learn.\u003C\u002Fspan\u003E\u003Cbr \u002F\u003E\u003Cspan style=\"font-size: 14pt;\"\u003E4) Written in TypeScript and will make it easier for you to type your React code\u003C\u002Fspan\u003E\u003C\u002Fp\u003E\n\u003Cpre class=\"language-javascript\"\u003E\u003Ccode\u003Eimport { createContainer } from \"unstated-next\";\nfunction useCounter() {\n  let [count, setCount] = useState(0);\n  let decrement = () =&gt; setCount(count - 1);\n  let increment = () =&gt; setCount(count + 1);\n  return { count, decrement, increment };\n}\nlet Counter = createContainer(useCounter);\nfunction CounterDisplay() {\n  let counter = Counter.useContainer();\n  return (\n    &lt;div&gt;\n      &lt;button onClick={counter.decrement}&gt;-&lt;\u002Fbutton&gt;\n      &lt;p&gt;You clicked {counter.count} times&lt;\u002Fp&gt;\n      &lt;button onClick={counter.increment}&gt;+&lt;\u002Fbutton&gt;\n    &lt;\u002Fdiv&gt;\n  );\n}\nfunction App() {\n  return (\n    &lt;Counter.Provider&gt;\n      &lt;CounterDisplay \u002F&gt;\n      &lt;CounterDisplay \u002F&gt;\n    &lt;\u002FCounter.Provider&gt;\n  );\n}\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Ch3\u003EApollo client state\u003C\u002Fh3\u003E\n\u003Cp\u003E\u003Cspan style=\"font-size: 14pt;\"\u003E1) it uses react variable state which are linked with useQuery when ever you change local state your quries get \u003C\u002Fspan\u003E\u003Cspan style=\"font-size: 14pt;\"\u003Erefreshed.\u003C\u002Fspan\u003E\u003Cbr \u002F\u003E\u003Cspan style=\"font-size: 14pt;\"\u003E2) no derived state or computed state.\u003C\u002Fspan\u003E\u003Cbr \u002F\u003E\u003Cspan style=\"font-size: 14pt;\"\u003E3) you define custom query fields and then use useQuery hook to read state. and custom mutation\u002Factions to \u003C\u002Fspan\u003E\u003Cspan style=\"font-size: 14pt;\"\u003Emutate state.\u003C\u002Fspan\u003E\u003Cbr \u002F\u003E\u003Cspan style=\"font-size: 14pt;\"\u003E4) it's immutatble.\u003C\u002Fspan\u003E\u003C\u002Fp\u003E\n\u003Cpre class=\"language-javascript\"\u003E\u003Ccode\u003E\u002F\u002F state.js &lt;-----------------------------------------------&gt;\nimport { ReactiveVar, makeVar } from \"@apollo\u002Fclient\";\nexport type modelState = {\n  name: string,\n  id: string,\n};\nconst modelStateInitialValue: modelState = {\n  name: \"\",\n  id: \"\",\n};\n\nexport const modelStateVar: ReactiveVar&lt;modelState&gt; =\n  makeVar &lt; modelState &gt; modelStateInitialValue;\n\n\u002F\u002F model state\nexport const modelFields = {\n  selectedmodel: {\n    read() {\n      return modelStateVar();\n    },\n  },\n};\n\u002F\u002Fmutations\u002Factions &lt;-----------------------------------------------&gt;\nimport { ReactiveVar } from \"@apollo\u002Fclient\";\nimport { modelStateVar, modelState } from \".\u002Fstate\";\n\u002F\u002F mutation\nconst selectmodel = (stateVar: ReactiveVar&lt;modelState&gt;) =&gt; (\n  modelState: modelState\n) =&gt; {\n  stateVar(modelState);\n};\nexport const modelLocalMutations = {\n  selectmodel: selectmodel(modelStateVar),\n};\n\n\u002F\u002F apollo client &lt;-----------------------------------------------&gt;\nnew ApolloClient({\n  connectToDevTools: true,\n  link: createUploadLink({ uri: GRAPHQL_ENDPOINT }),\n  cache: new InMemoryCache({\n    addTypename: true,\n    typePolicies: {\n      Query: {\n        fields: {\n          ...fields, \u002F\u002F &lt;--------------- custom fields\n        },\n      },\n    },\n  }),\n});\n\u002F\u002F COMPONENT;\n\u002F\u002F read and write on frontend &lt;-----------------------------------------------&gt;\n\u002F\u002FWRITING\nmodelLocalMutations.selectModel({\n  id: \"asd7897asdasfbdhwqjbdqj\",\n  name: \"TEST\",\n});\n\u002F\u002FREADING\nconst GET_MODEL_LOCAL_STATE = gql`\n  query modelState {\n    selectedModel @client {\n      id\n      name\n    }\n  }\n`;\nconst {\n  data: { selectedModel },\n} = useQuery(GET_MODEL_LOCAL_STATE);\n\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E",date_created:"2021-03-26T20:13:26Z",date_updated:"2021-03-27T09:18:40Z",logo:{type:a,generated:b,id:"directus_files:10b0b864-330b-41c1-8ce0-33c83a6546c1",typename:c},author:{type:a,generated:g,id:"$blog:8a7ad8c6-9837-4d6d-8c59-3a88d44c0ec4.author",typename:i},status:"published",categories:[{type:a,generated:b,id:"category_blog_2:4",typename:d},{type:a,generated:b,id:"category_blog_2:5",typename:d}],__typename:j}},"directus_files:10b0b864-330b-41c1-8ce0-33c83a6546c1":{writable:true,enumerable:true,value:{id:"10b0b864-330b-41c1-8ce0-33c83a6546c1",filename_disk:"10b0b864-330b-41c1-8ce0-33c83a6546c1.png",__typename:c}},"$blog:8a7ad8c6-9837-4d6d-8c59-3a88d44c0ec4.author":{writable:true,enumerable:true,value:{first_name:"Mohsin",last_name:"Amjad",description:f,title:"Full Stack Software Engineer",status:"active",email:"mohsinamjad51@gmail.com",avatar:{type:a,generated:b,id:"directus_files:6ecb4601-e36c-4393-9d95-99105b4311de",typename:c},__typename:i}},"directus_files:6ecb4601-e36c-4393-9d95-99105b4311de":{writable:true,enumerable:true,value:{id:"6ecb4601-e36c-4393-9d95-99105b4311de",filename_disk:"6ecb4601-e36c-4393-9d95-99105b4311de.jpeg",__typename:c}},"category_blog_2:4":{writable:true,enumerable:true,value:{id:"4",category_id:{type:a,generated:b,id:"category:47945184-d921-4220-a8a3-065713e41db8",typename:e},__typename:d}},"category:47945184-d921-4220-a8a3-065713e41db8":{writable:true,enumerable:true,value:{id:"47945184-d921-4220-a8a3-065713e41db8",name:"Frontend",__typename:e}},"category_blog_2:5":{writable:true,enumerable:true,value:{id:"5",category_id:{type:a,generated:b,id:"category:821a893b-a8a8-4f0a-9f9e-57537ba8ec95",typename:e},__typename:d}},"category:821a893b-a8a8-4f0a-9f9e-57537ba8ec95":{writable:true,enumerable:true,value:{id:"821a893b-a8a8-4f0a-9f9e-57537ba8ec95",name:"React",__typename:e}},"$ROOT_QUERY.items":{writable:true,enumerable:true,value:{"blog({\"filter\":{\"id\":{\"_eq\":\"8a7ad8c6-9837-4d6d-8c59-3a88d44c0ec4\"}}})":[{type:a,generated:b,id:"blog:8a7ad8c6-9837-4d6d-8c59-3a88d44c0ec4",typename:j}],__typename:k}},ROOT_QUERY:{writable:true,enumerable:true,value:{items:{type:a,generated:g,id:"$ROOT_QUERY.items",typename:k}}}})}}}("id",false,"directus_files","category_blog_2","category",null,true,"#FFF","directus_users","blog","items"));