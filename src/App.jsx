
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
import Uncontrol from './uncontrolledcomponent'
import Trans from './useTransition'
import Derive from './DerivedState'
import { useState } from 'react'
import Leftup from './leftup'
import Leftup1 from './leftup1'
import UpdateObj from './updateObject'
function App() {
   const [user,setuser]=useState('');
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
  <hr />
  <h1>Input Real Time Change </h1>
  <Input/>
  <br />
  <hr />
  <h1>Control Component</h1>
  <Control/>
  <br />
  <hr />
  <h1>Check Box</h1>
  <Check/>
  <br />
  <hr />
  <h1>Dropdown</h1>
  <Drop/>
  <br />
  <hr />
  <h1>Loop in jsx with map function</h1>
  <Loopma/>
  <br />
  <hr />
  <h1>Reuse component in loop</h1>
  <Roopma/>
  <hr />
  <h1>Nested Loop </h1>
  <Nested/>
  <br />
  <hr />
  <h1>Using USe effect Hook</h1>
  <Hook/>
  <br />
  <hr />
  <h1>Inline Css</h1>
  <Inlinec/>
  <br />
  <hr />
  <h1>Dynamic Inline Css</h1>
  <Dynamic/>
  <br />
  <hr />
  <h1>External Css</h1>
  <External/>
  <br />
  <hr />
  <h1>Use Ref Hook use</h1>
  <Refer/>
  <br />
  <hr />
  <h1>Uncontrolled Component</h1>
  <Uncontrol/>
  <br />
  <hr />
  <h1>useTransitionHook</h1>
  <Trans/>
  <br />
  <hr />
  <h1>Derived State</h1>
  <Derive/>
  <br />
  <hr />
  <h1>Lifting state</h1>
 
  <Leftup setuser={setuser}/>
  <Leftup1 user={user}/>
  <br /><hr />
  <h1>Update Object</h1>
  <UpdateObj/>
</div>)
}

export default App
