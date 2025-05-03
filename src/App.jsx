import ContactCard from './components/ContactCard.jsx'
import './index.css'

function App() {
  return (
    <div className="ContactPage">
      <ContactCard 
        img = "src\assets\meme-cat-1.jpg"
        name = "Mr. Whiskers"
        phone = "0436 273 283"
        email = "mrwhiskers@gmail.com"
      />
      <ContactCard 
        img = "src\assets\lulu-cat.jpg"
        name = "Lulu"
        phone = "0476 394 221"
        email = "MeowLuluMeow@gmail.com"
      />
      <ContactCard 
        img = "src\assets\mochi-cat.jpg"
        name = "Mochi"
        phone = "0463 273 111"
        email = "MOCHI9032@gmail.com"
      />
      <ContactCard 
        img = "src\assets\peanut-cat.jpg"
        name = "Peanut"
        phone = "0499 372 173"
        email = "PeanutButterJellyCat@gmail.com"
      />
    </div>
  )
}

export default App
