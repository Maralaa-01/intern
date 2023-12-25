import UserCircleIcon from "../../public/assets/user-circle"
import CalendarBlankIcon from "../../public/assets/calendar-blank"
import ChatCircleDotsIcon from "../../public/assets/chat-circle-dots"
import RightArrow from "../../public/assets/right-arrow"

export default function LatestNews(){
    return(
        <div className="flex flex-col padding-x paddingy72px gap40px bg-grey-50">
            <span className="w-full text-center heading-01">Latest News</span>
            <div className="flex gap24px">
                <div className="flex flex-col items-start padding32px gap24px w-1/3 bg-grey-0 rounded border border-grey-100 shadow-latest-news">
                    <div className="flex items-center justify-center overflow-hidden h-[200px] rounded-[3px] bg-blend-lighten"><img src="/latest-news-1.jfif"/></div>
                    <div className="flex flex-col gap12px w-full">
                        <div className="flex flex-col gap8px">
                            <div className="flex items-start gap16px body-small-400 text-grey-700 latest-news-icon">
                                <div className="flex items-center justify-center gap8px">
                                    <UserCircleIcon/>
                                    Kristin
                                </div>
                                <div className="flex items-center justify-center gap8px">
                                    <CalendarBlankIcon/>
                                    19Dec, 2013
                                </div>
                                <div className="flex items-center justify-center gap8px">
                                    <ChatCircleDotsIcon/>
                                    453
                                </div>
                            </div>
                            <span className="body-large-500">Cras nisl dolor, accumsan et metus sit amet, vulputate condimentum dolor.</span>
                        </div>
                        <span className="body-medium-400 text-grey-500">Maecenas scelerisque, arcu quis tempus egestas, ligula diam molestie lectus, tincidunt malesuada arcu metus posuere metus.</span>
                    </div>
                    <button className="btn white-btn h-10">READ MORE <RightArrow/></button>
                </div>
                <div className="flex flex-col items-start padding32px gap24px w-1/3 bg-grey-0 rounded border border-grey-100 shadow-latest-news">
                    <div className="flex items-center justify-center overflow-hidden h-[200px] rounded-[3px] bg-blend-lighten"><img src="/latest-news-1.jfif"/></div>
                    <div className="flex flex-col gap12px w-full">
                        <div className="flex flex-col gap8px">
                            <div className="flex items-start gap16px body-small-400 text-grey-700 latest-news-icon">
                                <div className="flex items-center justify-center gap8px">
                                    <UserCircleIcon/>
                                    Kristin
                                </div>
                                <div className="flex items-center justify-center gap8px">
                                    <CalendarBlankIcon/>
                                    19Dec, 2013
                                </div>
                                <div className="flex items-center justify-center gap8px">
                                    <ChatCircleDotsIcon/>
                                    453
                                </div>
                            </div>
                            <span className="body-large-500">Cras nisl dolor, accumsan et metus sit amet, vulputate condimentum dolor.</span>
                        </div>
                        <span className="body-medium-400 text-grey-500">Maecenas scelerisque, arcu quis tempus egestas, ligula diam molestie lectus, tincidunt malesuada arcu metus posuere metus.</span>
                    </div>
                    <button className="btn white-btn h-10">READ MORE <RightArrow/></button>
                </div>
                <div className="flex flex-col items-start padding32px gap24px w-1/3 bg-grey-0 rounded border border-grey-100 shadow-latest-news">
                    <div className="flex items-center justify-center overflow-hidden h-[200px] rounded-[3px] bg-blend-lighten"><img src="/latest-news-1.jfif"/></div>
                    <div className="flex flex-col gap12px w-full">
                        <div className="flex flex-col gap8px">
                            <div className="flex items-start gap16px body-small-400 text-grey-700 latest-news-icon">
                                <div className="flex items-center justify-center gap8px">
                                    <UserCircleIcon/>
                                    Kristin
                                </div>
                                <div className="flex items-center justify-center gap8px">
                                    <CalendarBlankIcon/>
                                    19Dec, 2013
                                </div>
                                <div className="flex items-center justify-center gap8px">
                                    <ChatCircleDotsIcon/>
                                    453
                                </div>
                            </div>
                            <span className="body-large-500">Cras nisl dolor, accumsan et metus sit amet, vulputate condimentum dolor.</span>
                        </div>
                        <span className="body-medium-400 text-grey-500">Maecenas scelerisque, arcu quis tempus egestas, ligula diam molestie lectus, tincidunt malesuada arcu metus posuere metus.</span>
                    </div>
                    <button className="btn white-btn h-10">READ MORE <RightArrow/></button>
                </div>
            </div>
        </div>
    )
}