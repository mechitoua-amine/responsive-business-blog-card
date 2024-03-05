export function App() {
  return (
    <main class='w-screen h-screen flex flex-col justify-center items-center bg-bg font-lato'>
      <img
        class='relative rounded-t-xl w-card z-0'
        src='/assets/hero-image-business-card.png'
        alt='couple drinking coffee'
      />
      <div class='bg-white px-8 shadow-transparent w-card relative before:block before:absolute before:content-[url("/assets/white-overlay.svg")] before:w-[100%] before:z-10 before:-top-16 before:left-0 rounded-b-xl'>
        <h1 class='text-title mt-1 font-poppins text-darkGray font-medium tracking-tighter leading-relaxed'>
          Perfect solution for small business
        </h1>
        <p class='pt-3 pb-6 text-body text-lightGray'>
          Small businesses need to generate leads to grow. You can use tools like Ringy.
        </p>
        <hr class='w-full' />
        <div class='flex flex-row py-5'>
          <div class='bg-gray-100 w-11 h-11 rounded-full flex justify-center items-center'>
            <img
              class='rounded-full w-9 h-9'
              src='/assets/avatar-image-business-card.png'
              alt='avatar image'
            />
          </div>
          <div class='flex flex-col ml-3'>
            <h3 class='text-md font-semibold m-0'>Amy Burgess</h3>
            <p class='text-xs text-lightGray'>Customer Manger, Solution Oy</p>
          </div>
        </div>
      </div>
    </main>
  )
}
