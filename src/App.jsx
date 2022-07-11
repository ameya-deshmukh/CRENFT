

function App() {
 return (
   <div className="min-h-screen flex flex-col text-white">
   <main className="container mx-auto px-6 pt-16 flex-1 text-center">
   
   
<h1 className="text-3xl md:text-6xl lg:text-8xl font-black uppercase mb-8">
 CRENFT 
</h1>
<h2 className="text-2xl md:text-4xl lg:text-6xl uppercase">
  <i>Digital assets, reimagined.</i>
</h2>
<div className="text-lg md:text-2xl lg:text-3xl py-2 px-4 md:py-4 md:px-10 lg:py-6 lg:px-12 bg-white bg-opacity-10 w-fit mx-auto mb-8 rounded-full">
<a href="https://buildspace.so/nights-weekends" target="_blank" >Buildspace Nights & Weekends Season 1 🌙 </a>
</div>
<form action="https://www.getrevue.co/profile/crenftclub/add_subscriber" method="post" id="revue-form" name="revue-form"  target="_blank">
  
  <div className="flex flex-col md:flex-row justify-center mb-4">
     <input 
     placeholder="bobby.axelrod@axecapital.com"
     type="email" 
     name="member[email]" 
     className="text-lg md:text-2xl placeholder:text-gray-400 placeholder:italic py-4 px-6 md:px-10 lg:py-6 lg:px-12 bg-white bg-opacity-10 focus:bg-opacity-20 duration-150 rounded-full md:rounded-tr-none md:rounded-br-none mb-4 md:mb-0" />

   <input 
   type="submit" 
   value="Join waitlist today." 
   name="member[subscribe]" 
   className="bg-primary rounded-full md:rounded-tl-none md:rounded-bl-none text-lg md:text-2xl py-4 px-6 md:px-10 lg:py-6 lg:px-12 cursor-pointer hover:opacity-90 duration-150"/>

  </div>
  
  <div className="opacity-75 italic">
    By subscribing, you agree with Revue’s <a target="_blank" href="https://www.getrevue.co/terms" className="hover:opacity-80.duration-150">Terms of Service</a> and <a target="_blank" href="https://www.getrevue.co/privacy" className="hover:opacity-80.duration-150">Privacy Policy</a>.
    </div>
  </form>
   </main>

   <footer className="container mx-auto p-6 flex flex-col md:flex-row items-center justify-between">
    <p>Built with 🤍 by Ameya Deshmukh</p>
<div className="flex -mx-6">
<a href="https://twitter.com/crenftclub" target="_blank" className="mx-3.hover:opacity-80.duration-150">About us </a> |  
   
<a href = "mailto: ameya@crenft.club" className="mx-3.hover:opacity-80.duration-150">Contact us</a>  
</div>
   </footer>
   </div>

  )
}

export default App
