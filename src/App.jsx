
import CurleyBraces from './CurleyBraces'
import Card from './Card'
import Fruit from './Onclcick'
import State from './stateinReact'
import Toggle from './Toggle'
import Multiple from './Multiplecasetoggle'
import Student from './Propsinreact'
import Defa from './defaultprops'
import Child from './Childrenprops'
import Input from './Inputvalue'
import Control from './controllcomponent'
import Check from './checkbox'
import Drop from './dropdownandcheckbon'
import Loopma from './loopinjsxwithmapfunction'
import Roopma from './reusecompo'
import Nested from './Nestedloop'
import Hook from './usingUSEEFFECThook'
import Inlinec from './inlinecss'
import Dynamic from './DynamicInliecss'
import External from './Externalcss'
import Refer from './useRefhook'
function App() {
 return( 
 <div>
  <CurleyBraces/>
  <Card/>
  <br />
  <h1>Onclick Function </h1>
  <Fruit/>
  <h1>State in React </h1>
  <State/>
  <br />
  <h1>Using Toggle</h1>
  <Toggle/>
  <br />
  <h1>Using toggle in multiple case</h1>
  <Multiple/>
  <br />
  <h1>Using Props</h1>
  <Student name="Sudhanshu"/>
  <br />
  <h1>Default Props</h1>
  <Defa/>
  <br />
  <h1>Using Children Props</h1>
  <Child>
    <h1>Hello, Everyone</h1>
  </Child>
  <br />
  <h1>Input Real Time Change </h1>
  <Input/>
  <br />
  <h1>Control Component</h1>
  <Control/>
  <br />
  <h1>Check Box</h1>
  <Check/>
  <br />
  <h1>Dropdown</h1>
  <Drop/>
  <br />
  <h1>Loop in jsx with map function</h1>
  <Loopma/>
  <br />
  <h1>Reuse component in loop</h1>
  <Roopma/>
  <hr />
  <h1>Nested Loop </h1>
  <Nested/>
  <br />
  <h1>Using USe effect Hook</h1>
  <Hook/>
  <br />
  <h1>Inline Css</h1>
  <Inlinec/>
  <br />
  <h1>Dynamic Inline Css</h1>
  <Dynamic/>
  <br />
  <h1>External Css</h1>
  <External/>
  <br />
  <h1>Use Ref Hook use</h1>
  <Refer/>
</div>)
}

export default App
