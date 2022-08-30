export const sendData = (title: string, content: string, subject?: string, topic?: string):Promise<any> => {
  return fetch("http://localhost:3001/storeData", {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    // We convert the React state to JSON and send it as the POST body
    //body: JSON.stringify({ title, content, subject, topic })
    body: JSON.stringify({ title, content })
  })
    .then((res) => res.json());
}
export const changeData = ():Promise<any> => {
  return fetch("http://localhost:3001/storeData", {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    // We convert the React state to JSON and send it as the POST body
    body: JSON.stringify({ title: "How to live", content: "this is a sample content" })
  })
    .then((res) => res.json());
}

export const getData = (title:string) => {
  return fetch(`http://localhost:3001/getData?title=${title}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
    // body: JSON.stringify({title:'How to live'})
  })//.then((res) => res.json()).then((data) => getDataFinal(data.json()));
}

// export const getDataFinal = (res:any) =>res;