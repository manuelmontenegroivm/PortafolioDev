import React from 'react'

const ProjectCard = ({ items }) => {
    return (
        <div className="flex rounded-lg  bg-cover px-8 py-12 bg-[#0A203E] md:p-0 mb-12 aos-init aos-animate" data-aos="fade-in">

            <div className="flex flex-col md:w-[60%] py-4 pl-3">
                <div className="flex flex-col relative mb-2">

                    <h3 className=" text-2xl font-semibold">{items.title}</h3>
                </div>
                <div className="md:p-4 md:w-[105%] rounded bg-[#233c64] z-10">
                    <p className=" text-sm font-normal">
                        {items.desc}
                    </p>
                </div>
                <div className="flex md:w-[105%] z-10 pt-4">
                    <ul className="flex flex-wrap text-sm font-medium text-slate-400" style={{ WebkitTextStroke: '0.1px black' }}>
                        {items.skills.map((e, i) => (
                            <li className="pr-4" key={i}>
                                <p>{e}</p>
                            </li>
                        ))}

                    </ul>
                </div>
                <div className="flex relative mt-3" >
                    {/*  <a className="flex justify-between items-center dark:text-white pr-4 hover:text-pink-600 dark:hover:text-pink-600 duration-300" href={items.github} target="_blank" rel="noreferrer">
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" className="min-h-[25px] min-w-[25px]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"></path>
                        </svg>
                    </a> */}
                    <a className="flex justify-between items-center text-white pr-4 hover:text-blue-500 dark:hover:text-blue-500 duration-300" href={items.href} target="_blank" rel="noreferrer">
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="min-h-[25px] min-w-[25px]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path fill="none" d="M0 0h24v24H0z"></path>
                            <path d="M19 19H5V5h7V3H5a2 2 0 00-2 2v14a2 2 0 002 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"></path>
                        </svg>
                    </a>
                </div>

            </div>

            <a className="hidden mr-2 md:flex w-[70%] h-[250px] my-auto z-0 overflow-hidden" href={items.href} target="_blank" rel="noreferrer">
                <div className="relative bg md:flex w-full h-full my-auto z-0 bg-cover hover:bg-transparent duration-300" style={{ backgroundImage: `url(${items.img})` }}>
                    <div className='absolute top-0 left-0 w-full h-full bg-black/20'></div>
                </div>
            </a>

        </div>
    )
}

export default ProjectCard
