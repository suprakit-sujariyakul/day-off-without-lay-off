export default function Label() {
  return (
    <div className='mb-8 text-center'>
      <span className='mx-4 inline-flex items-center text-sm'>
        <span className='mr-1.5 flex h-2.5 w-2.5 flex-shrink-0 rounded-full bg-blue-600'></span>
        Visitors
      </span>
      <span className='mx-4 inline-flex items-center text-sm'>
        <span className='mr-1.5 flex h-2.5 w-2.5 flex-shrink-0 rounded-full bg-purple-500'></span>
        Sessions
      </span>
      <span className='mx-4 inline-flex items-center text-sm'>
        <span className='mr-1.5 flex h-2.5 w-2.5 flex-shrink-0 rounded-full bg-indigo-500'></span>
        Customers
      </span>
      <span className='mx-4 inline-flex items-center text-sm'>
        <span className='mr-1.5 flex h-2.5 w-2.5 flex-shrink-0 rounded-full bg-teal-500'></span>
        Revenue
      </span>
    </div>
  );
}
