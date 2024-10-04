import { SearchForm } from '@/shared/components/common/SearchForm'

const DATA_TEMP = [
  {
    domain: '.com',
    price: 'only $6.19'
  },
  {
    domain: '.net',
    price: 'only $6.19'
  },
  {
    domain: '.org',
    price: 'only $6.19'
  },
  {
    domain: '.store',
    price: 'only $6.19'
  },
  {
    domain: '.info',
    price: 'only $6.19'
  }
]

export const DomainFinder = () => {
  return (
    <div className='container'>
      <div className='relative mt-[-165px] rounded-[10px] bg-primary-gradient p-[25px] text-white lg:p-[75px]'>
        <div className='absolute left-0 top-0 h-full w-full bg-[url(/images/domain/domain__finder__bg.svg)] bg-cover bg-center bg-no-repeat' />
        <div className='relative flex w-full flex-col items-center justify-center gap-[30px]'>
          <SearchForm />
          <ul className='flex flex-wrap items-center justify-center gap-[20px]'>
            {DATA_TEMP.map((item, index) => (
              <li
                key={index}
                className='flex flex-col gap-1 rounded-[6px] border border-[rgba(255,255,255,0.1)] bg-white-opacity-5 px-5 py-2.5 text-white'
              >
                <p className='text-[1.25rem] font-bold underline'>{item.domain}</p>
                <p className='text-[1rem]'>{item.price}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
