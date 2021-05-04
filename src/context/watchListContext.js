import React, { createContext, useState, useEffect } from "react";

export const WatchListContext = createContext();

export const WatchListContextProvider = (props) => {
  console.log();
  const [watchList, setWatchList] = useState(
    // localStorage.getItem("watchList").split(",")
     [
       "bitcoin",
      "ethereum",
      "binancecoin",
      "dogecoin",
       "ripple",
       "litecoin",
       "ripple",
       "tether",
       "cardano",
       "polkadot",
       "uniswap",
       "litecoin",
       "chainlink",
       "bitcoin-cash",
       "usd-coin",
       "vechain",
       "solana",
       "stellar",
       "theta-token",
       "filecoin",
       "okb",
       "wrapped-bitcoin",
       "tron",
       "binance-usd",
       "ethereum-classic",
       "monero",
       "neo",
       "bitcoin-cash-sv",
       "terra-luna",
     ]
  );

  useEffect(() => {
    localStorage.setItem("watchList", watchList);
  }, [watchList]);

  const deleteCoin = (coin) => {
    setWatchList(
      watchList.filter((el) => {
        return el !== coin;
      })
    );
  };

  // const addCoin = (coin) => {
  //   if (watchList.indexOf(coin) === -1) {
  //     setWatchList([...watchList, coin]);
  //   }
  // };

  return (
    <WatchListContext.Provider value={{ watchList, deleteCoin }}>
      {props.children}
    </WatchListContext.Provider>
  );
};
