$(function () {
    $('#container').highcharts({

	    chart: {
	        type: 'bubble',
	        zoomType: 'xy'
	    },

	    title: {
	    	text: ''
	    },

	    xAxis: {
                labels: {
                    style: {
                        color: '#5e5e5e',
                        align: 'center',
                        font: 'normal 12px Helvetica, Arial, sans-serif'
                    },                 
                    formatter: function () {
                        return this.value;
                    }
                }

            },
            yAxis: {
                min: -10,
                max: 150,
                title: {
                    text: ''
                },
                labels: {
                    style: {
                        color: '#5e5e5e',
                        align: 'center',
                        font: 'normal 12px Helvetica, Arial, sans-serif'
                    },
                    // format: '{value}%'
                }

            },

            legend: {
                backgroundColor: '#FFFFFF',
                reversed: true,
                borderWidth: 0,
                itemStyle:{
                    color: '#5e5e5e',
                    align: 'center',
                    font: 'normal 12px Helvetica, Arial, sans-serif'
                }

            },
	
	    series: [{
	    	name:'Excited',
	        data: [[97,36,79],[94,74,60],[68,76,58],[64,87,56],[68,27,73],[74,99,42],[7,93,87],[51,69,40],[38,23,33],[57,86,31]],
	    	color: '#D99C2C'
	    }, {
	    	name:'Joyous',
	        data: [[25,10,87],[2,75,59],[11,54,8],[86,55,93],[5,3,58],[90,63,44],[91,33,17],[97,3,56],[15,67,48],[54,25,81]],
	    	color: '#FFCC00'
	    }, {
	    	name:'Inspired',
	        data: [[25,10,87],[2,75,59],[11,54,8],[86,55,93],[5,3,58],[90,63,44],[91,33,17],[97,3,56],[15,67,48],[54,25,81]],
	    	color: '#FFDE5C'
	    }, {
	    	name:'Serene',
	        data: [[47,47,21],[20,12,4],[6,76,91],[38,30,60],[57,98,64],[61,17,80],[83,60,13],[67,78,75],[64,12,10],[30,77,82]],
	    	color: '#FFF5CC'
	    }]
	
	});
    
});


