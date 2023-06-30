const jsonUrl = 'https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json';

const table = document.querySelector('#datas')

getData();
async function getData(){
    try{
        const response = await axios.get(jsonUrl);
        
        response.data.slice(0,100).forEach(data => {

            let tempHtml = '<tr>';
            for (const key of Object.keys(data)) {
                tempHtml += `<td>${data[key]}</td>`;
            }
            tempHtml += '</tr>';
            return table.innerHTML += tempHtml
            // return (
            //     table.innerHTML += 
            //     `<tr>
            //     <td>${data.sno}</td>
            //     <td>${data.sna}</td>
            //     <td>${data.tot}</td>
            //     <td>${data.sbi}</td>
            //     <td>${data.sarea}</td>
            //     <td>${data.mday}</td>
            //     <td>${data.lat}</td>
            //     <td>${data.lng}</td>
            //     <td>${data.ar}</td>
            //     <td>${data.sareaen}</td>
            //     <td>${data.snaen}</td>
            //     <td>${data.aren}</td>
            //     <td>${data.bemp}</td>
            //     <td>${data.act}</td>
            //     <td>${data.srcUpdateTime}</td>
            //     <td>${data.updateTime}</td>
            //     <td>${data.infoTime}</td>
            //     <td>${data.infoDate}</td>
            //     </tr>`
            // )
        })
    }
    catch(error){
        console.log(error)
    }
}