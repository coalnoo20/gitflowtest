let url = new URL(
    `http://www.aladin.co.kr/ttb/api/ItemOffStoreList.aspx?ttbkey=[]`
);

const getApi = async () => {
    const response = await fetch(url);
    const data = await response.json();
    console.log('data', data);
};

getApi();
