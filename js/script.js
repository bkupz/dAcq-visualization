
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawCharts);

var firstTime = true;
var fileID ="1_JFqEI5z02JNDeSxHtCMOSUvBpxwxG5ubsNEc0KuKyM";

var pages = ['&sheet=acceleration', '&sheet=position', '&sheet=gas-pres', '&sheet=oil-temp', '&sheet=cvt', '&sheet=force', '&sheet=brake-pres', '&sheet=shock-disp', '&sheet=steering-disp'];
//var url = 'https://docs.google.com/spreadsheets/d/1_JFqEI5z02JNDeSxHtCMOSUvBpxwxG5ubsNEc0KuKyM/edit?usp=sharing';

function drawCharts() {
    var url = "https://docs.google.com/spreadsheets/d/"+fileID+"/edit?usp=sharing";
    var query = new google.visualization.Query(url+pages[0]);
    query.send(handleQueryResponseAcceleration);

    var query = new google.visualization.Query(url+pages[1]);
    query.send(handleQueryResponsePosition);

    var query = new google.visualization.Query(url+pages[2]);
    query.send(handleQueryResponseGasPres);
    
    var query = new google.visualization.Query(url+pages[3]);
    query.send(handleQueryResponseOilTemp);
    
    var query = new google.visualization.Query(url+pages[4]);
    query.send(handleQueryResponseCVT);
    
    var query = new google.visualization.Query(url+pages[5]);
    query.send(handleQueryResponseForce);
    
    var query = new google.visualization.Query(url+pages[6]);
    query.send(handleQueryResponseBrakePres);
    
    var query = new google.visualization.Query(url+pages[7]);
    query.send(handleQueryResponseShockDisp);
    
    var query = new google.visualization.Query(url+pages[8]);
    query.send(handleQueryResponseSteeringDisp);
}

function handleQueryResponseAcceleration(response) {
    if (response.isError()) {
        console.log('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
        return;
    }

    var options = {
        title: 'Acceleration Chart',
        curveType: 'function',
        legend: { position: 'bottom' }
    };

    var data = response.getDataTable();
    
    var id = 'acceleration-chart';
    
    drawChart(data, options, id);
}

function handleQueryResponsePosition(response) {
    if (response.isError()) {
        console.log('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
        return;
    }

    var options = {
        title: 'Position Chart',
        curveType: 'function',
        legend: { position: 'bottom' }
    };

    var data = response.getDataTable();

    var id = 'position-chart'
    drawChart(data, options, id);
}

function handleQueryResponseGasPres(response) {
    if (response.isError()) {
        console.log('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
        return;
    }

    var options = {
        title: 'Gas Pedal Pressure Chart',
        curveType: 'function',
        legend: { position: 'bottom' }
    };

    var data = response.getDataTable();

    var id = 'gas-pre-chart';
    drawChart(data, options, id);
}

function handleQueryResponseOilTemp(response) {
    if (response.isError()) {
        console.log('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
        return;
    }

    var options = {
        title: 'Oil Tempuratue Chart',
        curveType: 'function',
        legend: { position: 'bottom' }
    };

    var data = response.getDataTable();

    var id = 'oil-temp-chart';
    drawChart(data, options, id);
}

function handleQueryResponseCVT(response) {
    if (response.isError()) {
        console.log('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
        return;
    }

    var options = {
        title: 'CVT Chart',
        curveType: 'function',
        legend: { position: 'bottom' }
    };

    var data = response.getDataTable();

    var id = 'cvt-chart';
    drawChart(data, options, id);
}

function handleQueryResponseForce(response) {
    if (response.isError()) {
        console.log('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
        return;
    }

    var options = {
        title: 'Force Chart',
        curveType: 'function',
        legend: { position: 'bottom' }
    };

    var data = response.getDataTable();

    var id = 'force-chart';
    drawChart(data, options, id);
}

function handleQueryResponseBrakePres(response) {
    if (response.isError()) {
        console.log('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
        return;
    }

    var options = {
        title: 'Brake Pressue Chart',
        curveType: 'function',
        legend: { position: 'bottom' }
    };

    var data = response.getDataTable();

    var id = 'brake-pre-chart';
    drawChart(data, options, id);
}


function handleQueryResponseShockDisp(response) {
    if (response.isError()) {
        console.log('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
        return;
    }

    var options = {
        title: 'Shock Displacement Chart',
        curveType: 'function',
        legend: { position: 'bottom' }
    };

    var data = response.getDataTable();

    var id = 'shock-disp-chart';
    drawChart(data, options, id);
}


function handleQueryResponseSteeringDisp(response) {
    if (response.isError()) {
        console.log('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
        return;
    }

    var options = {
        title: 'Steering Displacment Chart',
        curveType: 'function',
        legend: { position: 'bottom' }
    };

    var data = response.getDataTable();

    var id = 'steering-disp-chart';
    drawChart(data, options, id);
}

function drawChart(data, options, id) {
    var chart = new google.visualization.LineChart(document.getElementById(id));
    chart.draw(data, options);
}

function switchToGetFile() {
    $("#container-main").css("display", "none");
    $("#container-getFile").css("display", "block");
    if(firstTime) {      
        listFilesInConsole();
        firstTime = false;
    }
}

function switchToMain() {
    $("#container-main").css("display", "block");
    $("#container-getFile").css("display", "none");
    drawCharts();
}


var API_KEY = 'AIzaSyBMiJQmBE6uxyrHau_zmKpuetSLPA-Sj78';

function listFilesInConsole() {
    //https://stackoverflow.com/questions/18116152/how-do-i-get-a-file-list-for-a-google-drive-public-hosted-folder
    var folderId = '1jFpcWj_H572aSLbYFWozFMCz7A6JngC-';
    var url = "https://www.googleapis.com/drive/v3/files?q='" + folderId + "'+in+parents&key=" + API_KEY;
    var promise = $.getJSON( url, function( data, status){
        // on success
    });
        promise.done(function( data ){
        console.log(data);
        //https://stackoverflow.com/questions/5180382/convert-json-data-to-a-html-table
        var container = document.getElementById("files");
        console.log(data.files.length);
        var length = data.files.length;

        var tbl = document.createElement('table');
        tbl.style.width = '100%';
        tbl.setAttribute('border', '1');
        var tbdy = document.createElement('tbody');

        var tr = document.createElement('tr');
        var td = document.createElement('td');
        td.appendChild(document.createTextNode("Selection"))
        tr.appendChild(td)
        var td = document.createElement('td');
        td.appendChild(document.createTextNode("File name"))
        tr.appendChild(td)
        var td = document.createElement('td');
        td.appendChild(document.createTextNode("File type"))
        tr.appendChild(td)
        var td = document.createElement('td');
        td.appendChild(document.createTextNode("File id"))
        tr.appendChild(td)
        tbdy.appendChild(tr);

        for(i = 0; i<length; i++) {
            //var node = document.createElement('p');
            //node.innerText = data.files[i].name;
            //container.appendChild(node);
            var tr = document.createElement('tr');
            
            var td = document.createElement('td');
            td.appendChild(createRadioElement("selection", 1))
            tr.appendChild(td)

            var td = document.createElement('td');
            td.appendChild(document.createTextNode(data.files[i].name))
            tr.appendChild(td)

            var td1 = document.createElement('td');
            td1.appendChild(document.createTextNode(data.files[i].mimeType))
            tr.appendChild(td1)

            var td2 = document.createElement('td');
            td2.className = "id";
            td2.appendChild(document.createTextNode(data.files[i].id))
            tr.appendChild(td2)

            tbdy.appendChild(tr);
        }
        tbl.appendChild(tbdy);
        container.appendChild(tbl)
        document.data = data;

        getSelectedRadio();
        
    }).fail(function(){

    });
}

function createRadioElement(name, checked) {
    var radioHtml = '<input type="radio" name="' + name + '"';
    if ( checked ) {
        radioHtml += ' checked="checked"';
    }
    radioHtml += '/>';

    var radioFragment = document.createElement('div');
    radioFragment.innerHTML = radioHtml;

    return radioFragment.firstChild;
}

function getSelectedRadio() {
    $(document).on('change', ':radio[name="selection"]:checked', function () {
        var arOfVals = $(this).parent().nextAll().map(function () {
            return $(this).text();
        }).get();
        console.log(arOfVals[2]);
        fileID = arOfVals[2];
    });

}

document.Test = function() {
    console.log("RUNNING UNIT TESTS...")

    // Test 1 : Test Get good file ID
    var urlTest1 = "https://docs.google.com/spreadsheets/d/1_JFqEI5z02JNDeSxHtCMOSUvBpxwxG5ubsNEc0KuKyM/edit?usp=sharing";
    var query = new google.visualization.Query(urlTest1);
    query.send(function(response){
        if (response.isError()) {
            console.log('Test 1 : FAILED');
        } else {
            console.log('Test 1: PASSED');
        }
    });

    // Test 2 : Test Get Good Folder ID
    var folderId = '1jFpcWj_H572aSLbYFWozFMCz7A6JngC-';
    var urlTest2 = "https://www.googleapis.com/drive/v3/files?q='1_JFqEI5z02JNDeSxHtCMOSUvBpxwxG5ubsNEc0KuKyM'+in+parents&key=" + API_KEY;
    var promise = $.getJSON( urlTest2, function( data, status){
        // on success
    });
        promise.done(function( data ){
        console.log("Test 2 : PASSED");
    }).fail(function(){
        console.log("Test 2 : FAILED")
    });

    // Test 3 : Test Get bad fileID

}