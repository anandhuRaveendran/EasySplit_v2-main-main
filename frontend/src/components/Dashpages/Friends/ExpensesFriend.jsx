
const FriendExpense = () => {

  return (
    <div className='flex justify-between'>
      <div>
        <div className="w-[700px]  p-6 bg-gray-900 border-2 border-white rounded-md shadow-md">
        <header className="text-center">
          <h1 className="text-2xl text-white font-bold mb-[3%]">Friends Expense</h1>
        </header>

      <div class="mb-6">
        <label for="default-input" class="block mb-2 text-sm font-medium text-white">Category</label>
        <input type="text" id="default-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
      </div>

      <div class="mb-6">
        <label for="large-input" class="block mb-2 text-sm font-medium  text-white">Description</label>
        <input type="text" id="large-input" class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
      </div>


      <div className='flex'>
       <label for="default-input" class="block mb-2 text-sm font-medium text-white">Enter Money</label>
        <label for="countries" class="block mb-2 text-sm font-medium text-white ml-5">Select an option</label>
      </div>


      <div className='flex'>
        <div class="mb-6">
          <input type="text" id="default-input" value='$ ' class=" pl-4 w-[100px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
        </div>
        <div class="mb-6">
        <select id="countries" class="bg-gray-50 border w-[100px] border-gray-300  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block ml-[7%] h-10 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <option selected>Friends</option>
          <option value="US">Manu</option>
          <option value="CA">Sujin</option>
          <option value="FR">Anandu</option>
          <option value="DE">Midhun</option>
        </select>        
        </div>
      </div>




      <h1 className='text-white mb-3 mt-[3%]' >Bills or notes</h1>
        <div class="flex items-center justify-center w-full">
        <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
            <div class="flex flex-col items-center justify-center pt-5 pb-6">
                <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                </svg>
                <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
            </div>
            <input id="dropzone-file" type="file" class="hidden" />
        </label>
        </div>

        </div>
    </div>
    <div className="w-[700px]  p-6 bg-gray-900 border-2 border-white rounded-md shadow-md">
        <header className="text-center">
          <h1 className="text-2xl text-white font-bold mb-[3%]">select the users</h1>
        </header>

        <div className='flex ml-[5%] mt-[5%]'>
          <div className='w-[200px] h-10 border-2 border-white p-1 text-center'>Equal</div>
          <div className='w-[200px] h-10 border-2 border-white p-1 text-center'>Percentage</div>
          <div className='w-[200px] h-10 border-2 border-white p-1 text-center'>Fixed</div>
        </div>

        <div>
          <table className='flex gap-[5%] mt-[5%] ml-[15%]'>
              <td><input type="checkbox" /></td>
              <td>Manu</td>
              <td><input type='text'/> </td>
              <td>INR</td>
          </table>
        </div>

        <div className="flex justify-between mt-[70%] mx-[3%]">
        <button className="bg-green-500 text-white py-2 px-6 rounded-lg shadow hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400">
          splt
        </button>
        <button className="bg-red-500 text-white py-2 px-6 rounded-lg shadow hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400">
          Cancel
        </button>
      </div>

        </div>
    </div>

  );
};

export default FriendExpense;
