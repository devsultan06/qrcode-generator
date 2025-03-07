
function App() {

  return (
    <>
      <div className="bg-[rgb(18,18,18)] text-[#fff] h-[100vh] w-[100%] flex flex-col items-center max-900:px-[0px]">
        <h1 className='text-[55px] mb-[-30px] font-silk'>QR CODE</h1>
        <h1 className='text-[55px] font-silk'>GENERATOR</h1>
        <p className="font-metropolis text-[18px] font-normal mb-[40px]" >Create QR code for your website in seconds</p>

        <div className="input-field">
          <p className="text-[#808080] font-metropolis mb-[3px]">Enter any URL to generate QR Code</p>
          <input type="text" name="" id="" placeholder="Enter your URL" className="bg-[#2A2A2A] px-[30px] rounded-[100px] h-[50px] w-[500px]" />
          <button className="block px-[30px] rounded-[100px] h-[50px] w-[500px] mt-[30px]">
            Generate QR Code

          </button>

        </div>

        <img src="/public/frame.png" alt="" className="mt-[20px]" />

        <footer className="absolute bottom-0 w-[100%] text-center text-[#808080] font-metropolis border-t border-[#808080] py-[10px]">
          <p>Generate QR codes quickly and easily</p>
          <p>Free to use  .  No sign up required </p>

        </footer>
      </div>
    </>
  )
}

export default App
