
const data = {
    'San Diego': {
        '88.3': {
            url: 'http://listen.jazz88.org/ksds.mp3',
            callSign: 'KSDS',
            genre: 'Alternative',
            name: 'KSDS',
            isIframe: false,
            isCompatible: true
        },
        '89.1': {
            url: 'http://kpbs.streamguys1.com/kpbs-aac',
            callSign: 'KPBS',
            genre: 'Public Radio',
            name: 'NPR',
            isIframe: false,
            isCompatible: true
        },
        '90.3': {
            url: 'https://player.listenlive.co/36271/en',
            callSign: 'XHITZ',
            genre: 'Top-40',
            name: 'Z90.3',
            isIframe: true,
            isCompatible: false,
            iframe: '<iframe allow="autoplay" width="100%" height="200px" src="https://player.listenlive.co/36271/en" frameborder="0"></iframe>'
        },
        '91.1': {
            url: 'https://player.listenlive.co/36281/en',
            callSign: 'XETRA',
            genre: 'Alternative',
            name: '91X',
            isIframe: true,
            isCompatible: false,
            iframe: '<iframe allow="autoplay" width="100%" height="200px" src="https://player.listenlive.co/36281/en" frameborder="0"></iframe>'
        },
        '92.5': {
            url: 'https://player.listenlive.co/36261',
            callSign: 'XHRM',
            genre: 'Rythmic Oldies',
            name: 'Magic 92.5',
            isIframe: true,
            isCompatible: false,
            iframe: '<iframe allow="autoplay" width="100%" height="200px" src="https://player.listenlive.co/36261" frameborder="0"></iframe>'
        },
        '93.3': {
            url: 'https://www.iheart.com/live/channel-933-241/?embed=true',
            callSign: 'KHTS',
            name: 'Station Name',
            genre: 'Top-40',
            isIframe: true,
            isCompatible: false,
            iframe: '<iframe allow="autoplay" width="100%" height="200px" src="https://www.iheart.com/live/channel-933-241/?embed=true" frameborder="0"></iframe>'
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
            url: 'https://www.iheart.com/live/star-941-253/?embed=true',
            callSign: 'KMYI',
            name: 'Star 94.1',
            genre: 'Hot AC',
            isIframe: true,
            isCompatible: false,
            iframe: '<iframe allow="autoplay" width="100%" height="200px" src="https://www.iheart.com/live/star-941-253/?embed=true" frameborder="0">'
        },
        '94.5': {
            url: 'https://streamingcwsradio30.com:7023/stream?type=http&nocache=1',
            callSign: 'XHA',
            name: 'Invasora 94.5',
            genre: 'Regional Mexican',
            isIframe: false,
            isCompatible: true
        },
        '94.9': {
            url: 'https://www.audacy.com/stations/alt949',
            callSign: 'KBZT',
            name: 'ALT 94.9',
            genre: 'Alternative',
            isIframe: true,
            isCompatible: false,
            iframe: '<iframe allow="autoplay" src="https://www.audacy.com/stations/alt949?action=AUTOPLAY_FULL&actionContentId=101-889" style="width:100%; height:200px;" scrolling="yes" frameborder="no"></iframe>'
        },
        '95.7': {
            url: 'https://www.iheart.com/live/jamn-957-261/?embed=true',
            callSign: 'KSSX',
            name: `JAM'N 95.7`,
            genre: 'Hip-hop & Throwbacks',
            isIframe: true,
            isCompatible: false,
            iframe: '<iframe title="" height="200px" width="100%" src="https://www.iheart.com/live/jamn-957-261/?embed=true" allow="autoplay" frameborder="0"></iframe>'
        },
        '96.5': {
            url: 'https://www.audacy.com/stations?action=AUTOPLAY_FULL&actionContentId=101-531#',
            callSign: 'KYXY',
            name: 'KyXy 96.5',
            genre: 'Adult Contemporary',
            isIframe: true,
            isCompatible: false,
            iframe: '<iframe allow="autoplay" src="https://www.audacy.com/stations?action=AUTOPLAY_FULL&actionContentId=101-531#" style="width:100%; height:200px;" scrolling="yes" frameborder="no"></iframe>'
        },
        '97.3': {
            url: 'https://www.audacy.com/973thefansd',
            callSign: 'KWFN',
            name: '97.3 The Fan',
            genre: 'Sports',
            isIframe: true,
            isCompatible: false,
            iframe: '<iframe allow="autoplay" src="https://www.audacy.com/stations/973thefansd?action=AUTOPLAY_FULL&actionContentId=101-1094" style="width:100%; height:200px;" scrolling="yes" frameborder="no"></iframe>'
        },
        '97.7': {
            url: 'https://tunein.com/embed/player/s24607/',
            callSign: 'XHTIM',
            name: 'La Mejor 90.7',
            genre: 'Regional Mexican',
            isIframe: true,
            isCompatible: false,
            iframe: '<iframe allow="autoplay" src="https://tunein.com/embed/player/s24607/" style="width:100%; height:200px;" scrolling="no" frameborder="no"></iframe>'
        },
        '98.1': {
            url: 'https://www.audacy.com/stations/sunny981sd?action=AUTOPLAY_FULL&actionContentId=101-931',
            callSign: 'KXSN',
            name: 'Sunny 98.1',
            genre: 'Classic Hits',
            isIframe: true,
            isCompatible: false,
            iframe: '<iframe allow="autoplay" width="100%" height="200px" src="https://www.audacy.com/stations/sunny981sd?action=AUTOPLAY_FULL&actionContentId=101-931" frameborder="0"></iframe>'
        },
        '100.7': {
            url: 'https://player.listenlive.co/35441',
            callSign: 'KFBG',
            name: '100.7 BIG FM',
            genre: 'Adult Hits',
            isIframe: true,
            isCompatible: false,
            iframe: '<iframe allow="autoplay" width="100%" height="200px" src="https://player.listenlive.co/35441" frameborder="0"></iframe>'
        },
        '101.1': {
            url: 'https://kvibe-san-diego.mixlr.com/events/2652967',
            callSign: 'LPFM',
            name: 'World Beat Radio',
            genre: 'Caribbean',
            isIframe: true,
            isCompatible: false,
            iframe: '<iframe allow="autoplay" width="100%" height="200px" src="https://kvibe-san-diego.mixlr.com/events/2652967" frameborder="0"></iframe>'
        },
        '101.5': {
            url: 'https://www.iheart.com/live/kgb-1015-237/?embed=true',
            callSign: 'KGB',
            name: '101KGB',
            genre: 'Classic Rock',
            isIframe: true,
            isCompatible: false,
            iframe: '<iframe allow="autoplay" width="100%" height="200px" src="https://www.iheart.com/live/kgb-1015-237/?embed=true" frameborder="0"></iframe>'
        },
        '102.5': {
            url: 'https://www.imer.mx/fusion/',
            callSign: 'XHUAN',
            name: 'Fusion',
            genre: 'Spanish',
            isIframe: true,
            isCompatible: false,
            iframe: '<iframe allow="autoplay" width="100%" height="200px" src="https://s2.mexside.net/cp/widgets/player/?p=8036&type=rain" frameborder="0"></iframe>'
        },
        '102.9': {
            url: 'https://www.iheart.com/live/amor-1029-5212/?embed=true',
            callSign: 'KLQV',
            name: 'Amor 102.9',
            genre: 'Spanish Hits',
            isIframe: true,
            isCompatible: false,
            iframe: '<iframe allow="autoplay" width="100%" height="200px" src="https://www.iheart.com/live/amor-1029-5212/?embed=true" frameborder="0"></iframe>'
        },
        '103.7': {
            url: 'https://www.audacy.com/stations/kson?action=AUTOPLAY_FULL&actionContentId=101-925',
            callSign: 'KSON',
            name: '103.7 KSON',
            genre: 'Country',
            isIframe: true,
            isCompatible: false,
            iframe: '<iframe allow="autoplay" width="100%" height="200px" src="https://www.audacy.com/stations/kson?action=AUTOPLAY_FULL&actionContentId=101-925" frameborder="0"></iframe>'
        },
        '104.5': {
            url: 'http://18153.live.streamtheworld.com/XLTNFM_SC',
            callSign: 'XHLTN',
            name: 'Radio Latina',
            genre: 'Spanish Hits',
            isIframe: false,
            isCompatible: true,
        },
        '105.3': {
            url: 'https://rock1053.iheart.com/',
            callSign: 'KIOZ',
            name: 'ROCK 105.3',
            genre: 'Rock',
            isIframe: true,
            isCompatible: false,
            iframe: '<iframe allow="autoplay" width="100%" height="200" src="https://www.iheart.com/live/rock-1053-245/?embed=true" frameborder="0"></iframe>'
        },
        '106.5': {
            url: 'https://www.univision.com/radio/san-diego-klnv-fm/que-buena-106-5-fm',
            callSign: 'KLNV',
            name: 'Que Buena',
            genre: 'Regional Mexican',
            isIframe: true,
            isCompatible: false,
            iframe: '<iframe allow="autoplay" width="100%" height="200px" src="https://www.univision.com/radio/san-diego-klnv-fm/que-buena-106-5-fm/?embed=true" frameborder="0"></iframe>'
        },
        '107.3': {
            url: 'https://www.uniradio.com/radio/tijuana/pulsar1073',
            callSign: 'XHFG',
            name: 'Pulsar 107.3',
            genre: 'Spanish Hits',
            isIframe: false,
            isCompatible: false
        },
        '': {
            url: '',
            callSign: '',
            name: '',
            genre: '',
            isIframe: '',
            isCompatible: '',
            iframe:'<iframe src="" allow="autoplay" style="width:100%; height:200px;" scrolling="no" frameborder="no"></iframe>'
        },
    },
    'Los Angeles': {
        '88.1': {
            url: 'https://kkjz.org/',
            callSign: 'KKJZ',
            name: 'KJazz',
            genre: 'Jazz',
            isIframe: true,
            isCompatible: false,
            iframe: '<iframe allow="autoplay" width="100%" height="200" src="https://www.iheart.com/live/kjazz-881-6655/?embed=true" frameborder="0"></iframe>'
        },
        '88.5': {
            url: 'https://www.thesocalsound.org/',
            callSign: 'KCSN',
            name: 'The SoCal Sound',
            genre: 'Adult Alternative',
            isIframe: true,
            isCompatible: false,
            iframe: '<iframe allow="autoplay" width="100%" height="200" src="https://www.thesocalsound.org/live" frameborder="0"></iframe>'
        },
        '88.7': {
            url: 'https://kspc.radioca.st/stream?type=http&nocache=41177',
            callSign: 'KSPC',
            name: 'KSPC 88.7',
            genre: 'College',
            isIframe: false,
            isCompatible: true,
        },
        '88.9': {
            url: 'https://kxlu.com/',
            callSign: 'KXLU',
            name: 'KXLU 88.9',
            genre: 'College',
            isIframe: true,
            isCompatible: false,
            iframe: '<iframe src="https://kxlu.com/" allow="autoplay" style="width:100%; height:200px;" scrolling="no" frameborder="no"></iframe>'
        },
        '89.3': {
            url: 'https://www.kpcc.org/',
            callSign: 'KPCC',
            name: 'LAist 89.3',
            genre: 'Public Radio',
            isIframe: true,
            isCompatible: false,
            iframe:'<iframe allow="autoplay" width="100%" height="200" src="https://www.iheart.com/live/laist-6413/?embed=true" frameborder="0"></iframe>'
        },
        '89.9': {
            url: 'https://www.kcrw.com/',
            callSign: 'KCRW',
            name: 'KCRW',
            genre: 'Public Radio',
            isIframe: true,
            isCompatible: false,
            iframe:'<iframe allow="autoplay" width="100%" height="200" src="https://www.iheart.com/live/kcrw-899-on-air-5255/?embed=true" frameborder="0"></iframe>'
        },
        '90.7': {
            url: 'http://ic1.mainstreamnetwork.com/kpfk-fm',
            callSign: 'K212FA (KPFK)',
            name: 'KPFK 90.7',
            genre: 'Public Radio',
            isIframe: false,
            isCompatible: true,
        },
        '91.1': {
            url: 'http://14933.live.streamtheworld.com/KUSCMP128_SC',
            callSign: 'KDSC',
            name: 'Classical California KUSC',
            genre: 'Classical',
            isIframe: false,
            isCompatible: true,
        },
        '91.5': {
            url: 'https://www.kusc.org/',
            callSign: 'KUSC',
            name: '',
            genre: 'Classical',
            isIframe: true,
            isCompatible: false,
            iframe:'<iframe allow="autoplay" width="100%" height="200" src="https://www.iheart.com/live/classical-kusc-5258/?embed=true" frameborder="0"></iframe>'
        },
        '91.9': {
            url: 'https://kvcr.streamguys1.com/live',
            callSign: 'KVCR',
            name: 'NPR',
            genre: 'Public Radio',
            isIframe: false,
            isCompatible: true,
        },
        '92.3': {
            url: 'https://real923la.iheart.com/',
            callSign: 'KRRL',
            name: 'Real 92.3',
            genre: 'Urban Contemporary',
            isIframe: true,
            isCompatible: false,
            iframe:'<iframe allow="autoplay" width="100%" height="200" src="https://www.iheart.com/live/real-923-181/?embed=true" frameborder="0"></iframe>'
        },
        '93.1': {
            url: 'https://www.audacy.com/931jackfm',
            callSign: 'KCBS',
            name: '93.1 JACK FM',
            genre: 'Adult Hits',
            isIframe: true,
            isCompatible: false,
            iframe:'<iframe src="https://www.audacy.com/stations/931jackfm?action=AUTOPLAY_FULL&actionContentId=101-601" allow="autoplay" style="width:100%; height:200px;" scrolling="no" frameborder="no"></iframe>'
        },
        '93.5': {
            url: 'https://www.935kday.com/',
            callSign: 'KDAY',
            name: '93.5 KDAY',
            genre: 'Classic Hip-Hop',
            isIframe: true,
            isCompatible: false,
            iframe:'<iframe src="https://player.listenlive.co/35791" allow="autoplay" style="width:100%; height:200px;" scrolling="no" frameborder="no"></iframe>'
        },
        '93.9': {
            url: 'https://www.cali939.com/',
            callSign: 'KLLI',
            name: 'CALI 93.9',
            genre: 'Spanish Hits',
            isIframe: true,
            isCompatible: false,
            iframe:'<iframe allow="autoplay" width="100%" height="200" src="https://www.iheart.com/live/cali-939-6519/?embed=true" frameborder="0"></iframe>'
        },
        '94.3': {
            url: 'https://estrellatv.com/radio/que-buena-los-angeles',
            callSign: 'KBUA',
            name: 'Que Buena 94.3',
            genre: 'Regional Mexican',
            isIframe: true,
            isCompatible: false,
            iframe:'<iframe src="https://estrellatv.com/radio/que-buena-los-angeles" allow="autoplay" style="width:100%; height:200px;" scrolling="no" frameborder="no"></iframe>'
        },
        '94.7': {
            url: 'https://www.audacy.com/947thewave',
            callSign: 'KTWV',
            name: '94.7 The Wave',
            genre: 'Urban Contemporary',
            isIframe: true,
            isCompatible: false,
            iframe:'<iframe src="https://www.audacy.com/stations/947thewave?action=AUTOPLAY_FULL&actionContentId=101-323" allow="autoplay" style="width:100%; height:200px;" scrolling="no" frameborder="no"></iframe>'
        },
        '95.1': {
            url: 'https://www.audacy.com/kfrog',
            callSign: 'KFRG',
            name: 'KFROG 95.1',
            genre: 'Country',
            isIframe: true,
            isCompatible: false,
            iframe:'<iframe src="https://www.audacy.com/stations/kfrog?action=AUTOPLAY_FULL&actionContentId=101-293" allow="autoplay" style="width:100%; height:200px;" scrolling="no" frameborder="no"></iframe>'
        },
        '95.5': {
            url: 'https://www.955klos.com/',
            callSign: 'KLOS',
            name: '95.5 KLOS',
            genre: 'Classic Rock',
            isIframe: true,
            isCompatible: false,
            iframe:'<iframe allow="autoplay" width="100%" height="200" src="https://www.iheart.com/live/955-klos-5340/?embed=true" frameborder="0"></iframe>'
        },
        '95.9': {
            url: 'http://ice9.securenetsystems.net/KCAQ',
            callSign: 'KCAQ (CP)',
            name: 'Q 95.9',
            genre: 'Hip-Hop',
            isIframe: false,
            isCompatible: true,
        },
        '96.3': {
            url: 'https://liveaudio.lamusica.com/LA_KXOL_icy?aw_0_1st',
            callSign: 'KXOL',
            name: 'Mega 96.3',
            genre: 'Spanish Hits',
            isIframe: false,
            isCompatible: true,
        },
        '96.7': {
            url: 'http://ice8.securenetsystems.net/KLJR',
            callSign: 'KLJR',
            name: 'KLJR-FM 96.7',
            genre: 'Regional Mexican',
            isIframe: false,
            isCompatible: true,
        },
        '97.1': {
            url: 'https://www.audacy.com/knxnews',
            callSign: 'KNX',
            name: 'KNX News 97.1 FM',
            genre: 'News',
            isIframe: true,
            isCompatible: false,
            iframe:'<iframe src="https://www.audacy.com/stations/knxnews?action=AUTOPLAY_FULL&actionContentId=101-555" allow="autoplay" style="width:100%; height:200px;" scrolling="no" frameborder="no"></iframe>'
        },
        '97.5': {
            url: 'https://elboton.com/los-angeles/joseradio/',
            callSign: '	KLYY',
            name: 'Jose 97.5',
            genre: 'Spanish Hits',
            isIframe: true,
            isCompatible: false,
            iframe:'<iframe allow="autoplay" width="100%" height="200" src="https://www.iheart.com/live/jose-8217/?embed=true" frameborder="0"></iframe>'
        },
        '97.9': {
            url: 'https://liveaudio.lamusica.com/LA_KLAX_icy?aw_0_1st',
            callSign: 'KLAX',
            name: '97.9 La Raza',
            genre: 'Regional Meican',
            isIframe: false,
            isCompatible: true,
        },
        '98.3': {
            url: 'https://www.univision.com/radio/los-angeles-krcd',
            callSign: 'KRCV',
            name: 'Recuerdo 98.3',
            genre: `Spanish Hits 80's and 90's`,
            isIframe: true,
            isCompatible: false,
            iframe:'<iframe src="https://www.univision.com/radio/los-angeles-krcd" allow="autoplay" style="width:100%; height:200px;" scrolling="no" frameborder="no"></iframe>'
        },
        '98.7': {
            url: 'https://alt987fm.iheart.com/',
            callSign: 'KYSR',
            name: 'ALT 98.7',
            genre: 'Alternative',
            isIframe: true,
            isCompatible: false,
            iframe:'<iframe allow="autoplay" width="100%" height="200" src="https://www.iheart.com/live/alt-987-201/?embed=true" frameborder="0"></iframe>'
        },
        '99.0': {
            url: 'http://s7.viastreaming.net:9140/;',
            callSign: 'KBUU',
            name: 'Radio Malibu',
            genre: 'Adult Album Alternative',
            isIframe: false,
            isCompatible: true,
        },
        '99.1': {
            url: 'https://dublab.out.airtime.pro/dublab_b',
            callSign: 'KLDB',
            name: 'Dub Lab',
            genre: 'Electronic',
            isIframe: false,
            isCompatible: true,
        },
        '99.9': {
            url: 'https://www.kolafm.com/',
            callSign: 'KOLA',
            name: '',
            genre: 'Classic Hits',
            isIframe: '',
            isCompatible: '',
            iframe:'<iframe src="" allow="autoplay" style="width:100%; height:200px;" scrolling="no" frameborder="no"></iframe>'
        },
    }
}
