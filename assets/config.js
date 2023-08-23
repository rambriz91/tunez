
const data = {
    'san diego': {
        '88.3': {
            url:'http://listen.jazz88.org/ksds.mp3',
            callSign: 'KSDS',
            genre: 'Alternative',
            name:'KSDS',
            isIframe: false,
            isCompatible: true
        },
        '89.1': {
            url: 'http://kpbs.streamguys1.com/kpbs-aac',
            callSign: 'KPBS',
            genre:'Public Radio',
            name:'NPR',
            isIframe:false,
            isCompatible:true
        },
        '90.3': { 
            url:'https://player.listenlive.co/36271/en',
            callSign: 'XHITZ',
            genre:'Top-40',
            name:'Z90.3',
            isIframe:false,
            isCompatible:false
        },
        '91.1': {
            url:'https://player.listenlive.co/36281/en',
            callSign:'XETRA',
            genre:'Alternative',
            name:'91X',
            isIframe:false,
            isCompatible:false
        },
        '92.5': {
            url:'https://player.listenlive.co/36261',
            callSign:'XHRM',
            genre:'Rythmic Oldies',
            name:'Magic 92.5',
            isIframe:false,
            isCompatible:false,
        },
        '93.3': {
            url: 'https://www.iheart.com/live/channel-933-241/?embed=true',
            callSign: 'KHTS',
            name: 'Station Name',
            genre: 'Top-40',
            isIframe:true,
            isCompatible:false,
            iframe:'<iframe allow="autoplay" width="100%" height="200" src="https://www.iheart.com/live/channel-933-241/?embed=true" frameborder="0"></iframe>'
        },
        '93.7': {
            url: 'http://ic1.mainstreamnetwork.com/kpfk-fm',
            callSign: 'KPFK',
            name: 'KPFK',
            genre: 'Public Radio',
            isIframe: false,
            isCompatible: true
        },
        '94.1': {
            url:'https://www.iheart.com/live/star-941-253/?embed=true',
            callSign:'KMYI',
            name:'Star 94.1',
            genre:'Hot AC',
            isIframe: true,
            isCompatible:false,
            iframe:'<iframe allow="autoplay" width="100%" height="200" src="https://www.iheart.com/live/star-941-253/?embed=true" frameborder="0">'
        },
        '94.5': {
            url:'https://streamingcwsradio30.com:7023/stream?type=http&nocache=1',
            callSign:'XHA',
            name:'Invasora 94.5',
            genre:'Regional Mexican',
            isIframe: false,
            isCompatible: true
        },
        '94.9': {
            url:'https://www.audacy.com/stations/alt949',
            callSign:'KBZT',
            name:'ALT 94.9',
            genre:'Alternative',
            isIframe:false,
            isCompatible: false
        },
        '95.7': {
            url:'https://www.iheart.com/live/jamn-957-261/?embed=true',
            callSign:'KSSX',
            name:`JAM'N 95.7`,
            genre:'Hip-hop & Throwbacks',
            isIframe: true,
            isCompatible: false,
            iframe: '<iframe title="" height="200" width="100%" src="https://www.iheart.com/live/jamn-957-261/?embed=true" allow="autoplay" frameborder="0"></iframe>'
        },
        '96.5': {
            url:'https://www.audacy.com/stations?action=AUTOPLAY_FULL&actionContentId=101-531#',
            callSign:'KYXY',
            name:'KyXy 96.5',
            genre:'Adult Contemporary',
            isIframe: false,
            isCompatible: false,
        },
        '97.7': {
            url:'https://tunein.com/embed/player/s24607/',
            callSign:'XHTIM',
            name:'La Mejor 90.7',
            genre:'Regional Mexican',
            isIframe: true,
            isCompatible: false,
            iframe: '<iframe allow="autoplay" src="https://tunein.com/embed/player/s24607/" style="width:100%; height:100px;" scrolling="no" frameborder="no"></iframe>'
        },
        '98.1': {
            url:'https://www.audacy.com/stations/sunny981sd?action=AUTOPLAY_FULL&actionContentId=101-931',
            callSign:'KXSN',
            name:'Sunny 98.1',
            genre:'Classic Hits',
            isIframe: false,
            isCompatible: false,
        },
        '100.7': {
            url:'https://player.listenlive.co/35441',
            callSign:'KFBG',
            name:'100.7 BIG FM',
            genre:'Adult Hits',
            isIframe:false,
            isCompatible:false,
        },
        '101.1': {
            url:'https://kvibe-san-diego.mixlr.com/events/2652967',
            callSign:'LPFM',
            name:'World Beat Radio',
            genre:'Caribbean',
            isIframe: false,
            isCompatible: false,
        },
        '101.5': {
            url:'https://www.iheart.com/live/kgb-1015-237/?embed=true',
            callSign:'KGB',
            name:'101KGB',
            genre:'Classic Rock',
            isIframe:true,
            isCompatible:false,
            iframe: '<iframe allow="autoplay" width="100%" height="200" src="https://www.iheart.com/live/amor-1029-5212/?embed=true" frameborder="0"></iframe>'
        },
        '103.7': {
            url:'https://www.audacy.com/stations/kson?action=AUTOPLAY_FULL&actionContentId=101-925',
            callSign:'KSON',
            name:'103.7 KSON',
            genre:'Country',
            isIframe: false,
            isCompatible: false,
        },
        '104.5': {
            url:'http://18153.live.streamtheworld.com/XLTNFM_SC',
            callSign:'XHLTN',
            name:'Radio Latina',
            genre:'Spanish Hits',
            isIframe: false,
            isCompatible: true,
        },
        '106.5': {
            url:'https://www.univision.com/radio/san-diego-klnv-fm/que-buena-106-5-fm',
            callSign:'KLNV',
            name:'Que Buena',
            genre:'Regional Mexican',
            isIframe: false,
            isCompatible:'',
        },
        '': {
            url:'',
            callSign:'',
            name:'',
            genre:'',
            isIframe:'',
            isCompatible:'',
        },
        // '': {
        //     url:'',
        //     callSign:'',
        //     name:'',
        //     genre:'',
        //     isIframe:'',
        //     isCompatible:'',
        //},
    },
    'los angeles': {
        '93.3': {
            url: 'http://stream.com',
            name: 'Station Name',
            genre: 'Rock'
        },
        '94.1': {
            url: 'http://stream.com',
            name: 'Station Name 1',
            genre: 'Rock 1'
        }
    }
}
