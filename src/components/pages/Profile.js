import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {useTranslation} from "react-i18next";

function Profile() {
    const navigate = useNavigate();
    const{t}=useTranslation();

    const [DbUserName, setDbUserName] = useState('');
    const [DbUserEmail, setDbUserEmail] = useState('');

    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [verifyPassword, setVerifyPassword] = useState('');
    const [isUserNameChanged, setIsUserNameChanged] = useState(false);
    const [isUserEmailChanged, setIsUserEmailChanged] = useState(false);
    const [isCurrentPasswordChanged, setCurrentPasswordChanged] = useState(false);
    const [isNewPasswordChanged, setNewPasswordChanged] = useState(false);
    const [isVerifyPasswordChanged, setVerifyPasswordChanged] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8081/Profile')
            .then(res => {
                if (res.data.valid) {
                    setDbUserName(res.data.username);
                    setDbUserEmail(res.data.usermail);
                    setUserName(res.data.username);
                    setUserEmail(res.data.usermail);
                } else {
                    navigate("/SignIn");
                }
            })
            .catch((err) => {
                console.log(err);
                navigate("/SignIn");
            });
    }, [navigate]);


    const updateUserName = (event) => {
        event.preventDefault();
        axios.put('http://localhost:8081/updateUsername', { username: userName })
            .then((res) => {
                // Handle success
                console.log(res.data);
                if(res.status === 200){
                    setDbUserName(userName);
                    setIsUserNameChanged(false);
                }
            })
            .catch((err) => {
                // Handle error
                console.error(err);
            });
    };

    const updateMail = (event) => {
        event.preventDefault();
        axios.put('http://localhost:8081/updateEmail',{usermail: userEmail} )
            .then((res) => {
                // Handle success
                console.log(res.data);
                if(res.status === 200){
                    setDbUserEmail(userEmail);
                    setIsUserEmailChanged(false);
                }
            })
            .catch((err) => {
                // Handle error
                console.error(err);
            });
    };

    const updatePassword = (event) => {
        event.preventDefault();

        if (newPassword === verifyPassword) {
            axios.put('http://localhost:8081/updatePassword', {
                currentPassword: currentPassword,
                newPassword: newPassword
            }, {
                withCredentials: true // Ensure cookies are sent with the request
            })
                .then((res) => {
                    // Handle success
                    console.log(res.data);
                    if (res.status === 200) {
                        console.log("Password updated successfully");
                    }
                })
                .catch((err) => {
                    // Handle error
                    console.error(err);
                });
        } else {
            console.log("New Password and Verify Password do not match");
        }
    };
    const resetPasswords = (event) => {
        setCurrentPassword("");
        setCurrentPasswordChanged(false);
        setNewPassword("");
        setNewPasswordChanged(false);
        setVerifyPassword("");
        setVerifyPasswordChanged(false);
    }
    const handleUserNameChange = (event) => {
        setUserName(event.target.value);
        setIsUserNameChanged(event.target.value !== DbUserName);
    };

    const handleUserMailChange = (event) => {
       setUserEmail(event.target.value);
       setIsUserEmailChanged((event.target.value !== userEmail));
    };

    const handleCurrentPasswordChange = (event) => {
       setCurrentPassword(event.target.value);
       setCurrentPasswordChanged((event.target.value !== currentPassword)
       );
    };
    const handleNewPasswordChange = (event) => {
        setNewPassword(event.target.value);
        setNewPasswordChanged((event.target.value !== newPassword)
        );
    };
    const handleVerifyPasswordChange = (event) => {
        setVerifyPassword(event.target.value);
        setVerifyPasswordChanged((event.target.value !== verifyPassword)
        );
    };
    const logoutUser = (event) => {
        event.preventDefault();
        axios.get('http://localhost:8081/Logout')
            .then((res) => {
                if (res.status === 200) {
                    navigate('/');
                }
            })
            .catch((err) => {
                console.error(err);
            });
    };
    return (
        <div className="w-screen h-fit pl-60 pr-60 pt-20 pb-60 bg-black">
            <div className="w-full h-screen flex flex-col gap-20">
                <section className="flex w-full h-2/4">
                    <div className="flex flex-col w-2/4 h-full bg-wolfcape-brown rounded-l-md p-20 gap-6">
                        <h1 className="font-black text-4xl text-white text-left">{t("profileUsername")}</h1>
                        <p className="font-bold">{t("profileUsernameParagraph")}</p>
                    </div>
                    <div className="w-3/4 h-full bg-zinc-900 rounded-r-md p-20">
                        <form onSubmit={updateUserName} className="w-full h-full flex gap-20 flex-col">
                            <div className="w-full h-16 bg-zinc-800 rounded-md border-wolfcape-brown border-2">
                                <label className="relative font-black text-white" htmlFor="username">{t("profileUsername")}</label>
                                <input
                                    type="text"
                                    id="username"
                                    name="username"
                                    className="w-full relative -top-4 font-black text-2xl text-wolfcape-brown bg-transparent border-transparent"
                                    value={userName}
                                    onChange={handleUserNameChange}
                                />
                            </div>
                            <div className="relative top-20 flex gap-20 p-5">
                                {isUserNameChanged && (
                                    <button
                                        type="button"
                                        className="w-half h-16 font-black bg-zinc-800 hover:bg-zinc-700"
                                        onClick={() => {
                                            setUserName(DbUserName);
                                            setIsUserNameChanged(false);
                                        }}
                                    >{t("profileCancel")}
                                    </button>
                                )}
                                <button
                                    type="submit"
                                    className={`w-half h-16 font-black ${isUserNameChanged ? 'bg-wolfcape-brown hover:bg-wolfcape-brown/50' : 'bg-transparent text-zinc-800 hover:bg-transparent hover:text-zinc-800 border-wolfcape-brown cursor-not-allowed'}`}
                                    disabled={!isUserNameChanged}
                                >{t("profileSave")}
                                </button>
                            </div>
                        </form>
                    </div>
                </section>

                <section className="flex w-full h-2/4">
                    <div className="flex flex-col w-2/4 h-full bg-wolfcape-brown rounded-l-md p-20 gap-6">
                        <h1 className="font-black text-4xl text-white text-left">{t("profileEmail")}</h1>
                        <p className="font-bold">{t("profileEmailParagraph")}</p>
                    </div>
                    <div className="w-3/4 h-full bg-zinc-900 rounded-r-md p-20">
                        <form onSubmit={updateMail} className="w-full h-full flex gap-20 flex-col">
                            <div className="w-full h-16 bg-zinc-800 rounded-md border-wolfcape-brown border-2">
                                <label className="relative font-black text-white">{t("profileEmail")}</label>
                                <input
                                    type="email"
                                    className="w-full relative -top-4 font-black text-2xl text-wolfcape-brown bg-transparent border-transparent"
                                    value={userEmail}
                                    onChange={handleUserMailChange}
                                />
                            </div>
                            <div className="relative top-20 flex gap-20 p-5">
                                {isUserEmailChanged && (
                                    <button
                                        type="button"
                                        className="w-half h-16 font-black bg-z inc-800 hover:bg-zinc-700"
                                        onClick={() => {
                                            setUserEmail(DbUserEmail);
                                            setIsUserEmailChanged(false);
                                        }}
                                    >{t("profileCancel")}
                                    </button>
                                )}
                                <button
                                    type="submit"
                                    className={`w-half h-16 font-black ${isUserEmailChanged ? 'bg-wolfcape-brown hover:bg-wolfcape-brown/50' : 'bg-transparent text-zinc-800 hover:bg-transparent hover:text-zinc-800 border-wolfcape-brown cursor-not-allowed'}`}
                                    disabled={!isUserEmailChanged}
                                >{t("profileSave")}
                                </button>
                            </div>
                        </form>
                    </div>
                </section>

                <section className="flex w-full h-fit">
                    <div className="flex flex-col w-2/4 h-full bg-wolfcape-brown rounded-l-md p-20 gap-6">
                        <h1 className="font-black text-4xl text-white text-left">{t("profilePassword")}</h1>
                        <p className="font-bold">{t("profilePasswordParagraph")}</p>
                    </div>
                    <div className="w-3/4 h-full bg-zinc-900 rounded-r-md p-20">
                        <form onSubmit={updatePassword} className="w-full h-full flex gap-10 flex-col">
                            <div className="w-full h-16 bg-zinc-800 rounded-md border-wolfcape-brown border-2">
                                <label className="relative font-black text-white">{t("profileCurrentPassword")}</label>
                                <input
                                    type="password"
                                    className="w-full relative -top-4 font-black text-2xl text-wolfcape-brown bg-transparent border-transparent"
                                    value={currentPassword}
                                    onChange={handleCurrentPasswordChange}
                                />
                            </div>
                            <div className="flex flex-col w-full h-full bg-zinc-900 rounded-r-md gap-5">
                                <div className="w-full h-16 bg-zinc-800 rounded-md border-wolfcape-brown border-2">
                                    <label className="relative font-black text-white">{t("profileNewPassword")}</label>
                                    <input
                                        type="password"
                                        className="w-full relative -top-4 font-black text-2xl text-wolfcape-brown bg-transparent border-transparent"
                                        value={newPassword}
                                        onChange={handleNewPasswordChange}
                                    />
                                </div>
                                <div className="w-full h-16 bg-zinc-800 rounded-md border-wolfcape-brown border-2">
                                    <label className="relative font-black text-white">{t("profileVerifyNewPassword")}</label>
                                    <input
                                        type="password"
                                        className="w-full relative -top-4 font-black text-2xl text-wolfcape-brown bg-transparent border-transparent"
                                        value={verifyPassword}
                                        onChange={handleVerifyPasswordChange}
                                    />
                                </div>
                            </div>

                            <div className="relative top-20 flex gap-20 p-5">
                                {(isCurrentPasswordChanged || isNewPasswordChanged || isVerifyPasswordChanged) && (
                                    <button
                                        type="button"
                                        className="w-half h-16 font-black bg-z inc-800 hover:bg-zinc-700"
                                        onClick={resetPasswords}
                                    >{t("profileCancel")}
                                    </button>
                                )}
                                <button
                                    type="submit"
                                    className={`w-half h-16 font-black ${isCurrentPasswordChanged ? 'bg-wolfcape-brown hover:bg-wolfcape-brown/50' : 'bg-transparent text-zinc-800 hover:bg-transparent hover:text-zinc-800 border-wolfcape-brown cursor-not-allowed'}`}
                                    disabled={(!isCurrentPasswordChanged || !isNewPasswordChanged || !isVerifyPasswordChanged)}
                                >{t("profileSave")}
                                </button>
                            </div>
                        </form>
                    </div>
                </section>
                <section className="flex w-full h-2/4">
                    <div className="flex flex-col w-2/4 h-full bg-wolfcape-brown rounded-l-md p-20 gap-6">
                        <h1 className="font-black text-4xl text-white text-left">{t("profileLogOut")}</h1>
                    </div>
                    <div className="w-3/4 h-full bg-zinc-900 rounded-r-md p-20">
                        <div className="w-full h-full flex gap-10 flex-col">
                            <div>
                                <h1 className="font-black text-4xl text-white text-left">{t("profileLogOutParagraph")} {userName} !</h1>
                            </div>
                            <div className="relative top-20 flex gap-20 p-5">
                                <button
                                    type="submit"
                                    className="w-half h-16 font-black bg-wolfcape-brown hover:bg-wolfcape-brown/50"
                                    onClick={logoutUser}
                                >{t("profileLogOut")}
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Profile;
