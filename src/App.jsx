
import CurleyBraces from './CurleyBraces'
import Card from './Card'
import Fruit from './Onclcick'
import State from './stateinReact'
import Toggle from './Toggle'
import Multiple from './Multiplecasetoggle'
import Student from './Propsinreact'
import Defa from './defaultprops'
import Child from './Childrenprops'
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
    <h1>Hello,Everyone</h1>
  </Child>
</div>)
}

export default App
