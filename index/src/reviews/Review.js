import React from "react";

export default function Review() {
    return(
                      <div id={"reviewBox"}>

                          <div className="addNote"><input type="text" name="text" placeholder="+ Legg til kommentar" className="addTxt"/></div>

                            <div className="commentBox">

                                <div className="commentText">
                                    <span className="text1">Red Cross are very competent experts in first help. They are so effective; you never
                                                            need the second help.</span>

                                    <div className="commentInfo">

                                        <div className="commentProfile">
                                          <img className="profilePicture" src="https://picsum.photos/200/300?random=1" alt="randomProfilePic"/>
                                          <span className="text2">Billy Eirish</span>
                                        </div>

                                    </div>

                                </div>

                            </div>

                            <div className="commentBox">

                                <div className="commentText">
                                    <span className="text1">I have been HR responsible at my company for 12 years, and every year I update
                                                            my certification with Red Cross Ålesund. I can proudly say that no one has died under my
                                                            watch.</span>

                                    <div className="commentInfo">

                                        <div className="commentProfile">
                                           <img className="profilePicture" src="https://picsum.photos/200/300?random=2" alt="randomProfilePic"/>
                                           <span className="text2">James Brown</span>
                                        </div>

                                    </div>

                                </div>

                            </div>

                            <div className="commentBox">

                                <div className="commentText">
                                    <span className="text1">These folks may not be Linux kernel gurus, but they do one thing well – they teach
                                                            you the essentials of first help in an easy and interesting way.</span>

                                    <div className="commentInfo">

                                        <div className="commentProfile">
                                           <img className="profilePicture" src="https://picsum.photos/200/300?random=3" alt="randomProfilePic"/>
                                           <span className="text2">Anna Brook</span>
                                        </div>

                                    </div>

                                </div>

                            </div>


                      </div>
    )
}