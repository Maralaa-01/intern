'use client';
import RightArrow from "../../public/assets/right-arrow"
import LeftArrow from "../../public/assets/left-arrow"

export default function Categorys(){
    const cats = [
        {
            'id': 'cat1',
            'url': '/cat-computer-laptop.png',
            'title': 'Computer & Laptop'
        },
        {
            'id': 'cat2',
            'url': '/cat-phone.png',
            'title': 'SmartPhone'
        },
        {
            'id': 'cat3',
            'url': '/cat-headphones.png',
            'title': 'Headphones'
        },
        {
            'id': 'cat4',
            'url': '/cat-accessories.png',
            'title': 'Accessories'
        },
        {
            'id': 'cat5',
            'url': '/cat-camera-photo.png',
            'title': 'Camera & Photo'
        },
        {
            'id': 'cat6',
            'url': '/cat-tv-homies.png',
            'title': 'TV & Homies'
        },
    ];
    return(
        <div className="flex flex-col padding-x padding40px gap40px">
            <span className="w-full text-center heading-01">Shop with Categories</span>
            <div className="relative h-44">
                <div className="absolute flex justify-between -translate-y-1/2 -left-5 -right-5 top-1/2">
                    <button className="btn bg-primary-500 cat-icon rounded-full border-none"><LeftArrow/></button>
                    <button className="btn bg-primary-500 cat-icon rounded-full border-none"><RightArrow/></button>
                </div>
                <div className="carousel w-full h-full gap8px">
                    {cats.map((cat) => (
                        <div key={cat.id} className="carousel-item sm:w-[calc(100%/6-0.125rem)] lg:w-[calc(100%/6-0.25rem)] xl:w-[calc(100%/6-0.375rem)] 3xl:w-[calc(100%/6-0.5rem)]">
                            <div className="flex flex-col items-center justify-center w-full gap16px border sm:py-0.5 md:py-1 lg:py-1.5 xl:py-2 2xl:py-2.5 3xl:py-3 sm:px-2 md:px-3 lg:px-3.5 xl:px-4 2xl:px-5 3xl:px-6">
                                <div className="flex justify-center items-center sm:h-16 md:h-19 lg:h-25 xl:h-28 2xl:h-38 3xl:h-47 sm:w-16 md:w-19 lg:w-25 xl:w-28 2xl:w-38 3xl:w-47"><img src={cat.url} className="max-h-full max-w-full" /></div>
                                <span className="body-medium-500">{cat.title}</span>
                            </div>
                            
                        </div> 
                    ))}
                </div>
            </div>
        </div>
    )
}