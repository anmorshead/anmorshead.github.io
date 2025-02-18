export default function Header() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 m-10 gap-x-0">
      <div className="md:col-span-3 md:col-start-3 my-48">
          <img src="images/quote.png"></img>
      </div>
      <div className="md:col-span-5 md:col-start-6 my-24">
        <img src="images/andrea-logo2.png" alt="Andrea Logo" className="animate-dimlight"/>
      </div>
    </div>
  );
}
