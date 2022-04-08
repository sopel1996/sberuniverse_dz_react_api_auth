import { useEffect, useState } from "react";
import { ImgList } from "../ImgList";
import styles from "./style.module.css";

export const GridTable = () => {
  const [logoutStatus, setLogoutStatus] = useState(true);
  const [loginStatus, setLoginStatus] = useState(false);
  const [token, setToken] = useState('');
  var loginFlag = false;
  // const [imgListState, setImgListState] = useState([]);
  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/photos/?_limit=100")
  //     .then((response) => response.json())
  //     .then((result) => {
  //       setImgListState((prevState) => {
  //         return [...prevState, ...result];
  //       });
  //     });
  // }, []);
  useEffect(() => {
    console.log(loginStatus);
    if (loginStatus){
      fetch("https://api.react-learning.ru/signin",{
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body:JSON.stringify({
          "email": "sopelmurman@gmail.com",
          "password": "378Sopel122"
        })
        
      })
      .then((response) => {
        if(response.ok){

          return response.json()
        }else{throw response.status} 

      }
      )
      .then((result) => {
        setToken(result.token)
      })
      .catch(error => {
        if(error == 401){
          console.log('unauth');
          logout();
        }
        if(error == 404){
          console.log('User is not find');
          logout();
        }
    })
    }else {
      setToken('');
    }
  }, [loginStatus]);



  useEffect(()=>{
    console.log('token=>',token||'none');
  },[token])


  const logout = () =>{
    setLoginStatus(false);
  }

  const login = () =>{
    setLoginStatus(true);
  }
  return (
    <div className={styles.gridTable}>
      <button onClick={login}>login</button>
      <button onClick={logout}>logout</button>
    </div>
  );
};
