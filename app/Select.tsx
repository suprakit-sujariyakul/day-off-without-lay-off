export default function Select() {
  return (
    <div className='mb-8 grid grid-cols-1 gap-4 md:grid-cols-4'>
      <div>
        <label className='mb-2 block text-sm font-medium text-gray-900'>
          Select an option
        </label>
        <select
          id='selectedCountry'
          className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 '
        >
          <option selected>Choose a country</option>
          <option value='US'>United States</option>
          <option value='CA'>Canada</option>
          <option value='FR'>France</option>
          <option value='DE'>Germany</option>
        </select>
      </div>
      <div>
        <label className='mb-2 block text-sm font-medium text-gray-900'>
          Select an option
        </label>
        <select
          id='selectedYear'
          className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 '
        >
          <option selected>Choose a year</option>
          <option value='US'>United States</option>
          <option value='CA'>Canada</option>
          <option value='FR'>France</option>
          <option value='DE'>Germany</option>
        </select>
      </div>
      <div>
        <label className='mb-2 block text-sm font-medium text-gray-900'>
          Select an option
        </label>
        <select
          id='selectedWeekend'
          className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 '
        >
          <option selected>Choose your weekend</option>
          <option value='US'>United States</option>
          <option value='CA'>Canada</option>
          <option value='FR'>France</option>
          <option value='DE'>Germany</option>
        </select>
      </div>
      <div>
        <label className='mb-2 block text-sm font-medium text-gray-900'>
          Select an option
        </label>
        <select
          id='selectedDayoff'
          className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 '
        >
          <option selected>Longest day off you can take</option>
          <option value='US'>United States</option>
          <option value='CA'>Canada</option>
          <option value='FR'>France</option>
          <option value='DE'>Germany</option>
        </select>
      </div>
    </div>
  );
}
