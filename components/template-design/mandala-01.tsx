'use client'

import React, { useRef, useState, useEffect } from 'react';
import { GiOppositeHearts } from "react-icons/gi";
import Countdown from 'react-countdown';
import { IoIosArrowForward } from "react-icons/io";

import AOS from 'aos'
import 'aos/dist/aos.css';
import { PiPencilLineDuotone } from "react-icons/pi";
import { GrCopy } from "react-icons/gr";

const Cover : React.FC<any> = ({ currentColor }: any) => {

// const Cover: React.FC = ({ currentColor }: any) => {
  useEffect(() => {
    AOS.init();
  }, [])

  const videoRef1 = useRef<HTMLVideoElement>(null);
  const videoRef2 = useRef<HTMLVideoElement>(null);
  const videoRef3 = useRef<HTMLVideoElement>(null);
  const videoRef4 = useRef<HTMLVideoElement>(null);
  const videoRef5 = useRef<HTMLVideoElement>(null);
  const section2Ref = useRef<HTMLDivElement>(null);
  const section3Ref = useRef<HTMLDivElement>(null);
  const section4Ref = useRef<HTMLDivElement>(null);
  const section5Ref = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [musicPlaying, setMusicPlaying] = useState(false);
  const [audio, setAudio]: any = useState(null);

  useEffect(() => {
    // Lock scroll
    document.body.style.overflow = 'hidden';
    
    return () => {
      // Ensure to unlock scroll if component unmounts
      document.body.style.overflow = 'unset';
    };
  }, []);

  const handlePlayPause = () => {
    if (isPlaying) {
      videoRef1.current?.pause();
      videoRef2.current?.pause();
      videoRef3.current?.pause();
      videoRef4.current?.pause();
      videoRef5.current?.pause();
    } else {
      videoRef1.current?.play();
      videoRef2.current?.play();
      videoRef3.current?.play();
      videoRef4.current?.play();
      videoRef5.current?.play();
      audio.play();
      setMusicPlaying(true);
      // Unlock scroll
      document.body.style.overflow = 'unset';
      
      // Scroll to the second section after 2 seconds
      setTimeout(() => {
        section2Ref.current?.scrollIntoView({ behavior: 'smooth' });
      }, 500);
    }
    setTimeout(() => {
      // section2Ref.current?.scrollIntoView({ behavior: 'smooth' });
      setIsPlaying(!isPlaying);
    }, 2000);
    
  };

  const getRandomRotation = () => {
    const rotations = ['-rotate-2', 'rotate-3', 'rotate-2', '-rotate-3'];
    return rotations[Math.floor(Math.random() * rotations.length)];
  };

  const dataKado =
        [
          {
            "id": 1,
            "title": "Mangkuk Set Japanese",
            "description": "Mangkuk keramik mewah dengan desain khas jepang dan motif bunga sakura.",
            "price_text": "Rp. 24.500 - Rp. 99.000",
            "price": 24500,
            "thumbnail": "https://ik.imagekit.io/vtvggda66/kado/7f8004c5405f78bb221c9a3466a59191.jpg?updatedAt=1710948689465",
            "category": "AM",
            "source": "shopee",
            "link": "https://shope.ee/9K8R2hjyx4",
            "terjual": "10RB+", 
            "tag": "unik",
            "gender": "unisex",
            "pool": "pernikahan"
        },
        {
            "id": 2,
            "title": "Gelas Kayu Gift Set",
            "description": "Satu paket gelas kayu mahoni dan dengan pilihan kombinasi peralatan makan lain seperti piring dan sendok garpu.",
            "price_text": "Rp. 39.999 - Rp. 200.965",
            "price": 39999,
            "thumbnail": "https://ik.imagekit.io/vtvggda66/kado/095129ffc8e802bea7a74228b8f11443.jpg?updatedAt=1710948689533",
            "category": "AM",
            "source": "shopee",
            "link": "https://shope.ee/1fizulif6O",
            "terjual": "4RB+",
            "tag": "hampers",
            "gender": "unisex",
            "pool": "pernikahan"
        },
        {
            "id": 3,
            "title": "Marble gelas mug couple",
            "description": "Cangkir mug couple berbentuk bulat dengan motif marble, dilengkapi sendok dan box cantik.",
            "price_text": "Rp. 80.000",
            "price": 80000,
            "thumbnail": "https://ik.imagekit.io/vtvggda66/kado/id-11134201-23020-2k4318i5c2nvc7.jpg?updatedAt=1710949816625",
            "category": "AM",
            "source": "shopee",
            "link": "https://shope.ee/9zO7q9BjaU",
            "terjual": "6RB+",
            "tag": "aesthetic",
            "gender": "unisex",
            "pool": "pernikahan"
        },
        {
            "id": 4,
            "title": "Cangkir kristal aesthetic Vintage",
            "description": "Cangkir kaca tahan panas cantik dan aesthetic dengan style vintage.",
            "price_text": "Rp. 24.500 - Rp. 99.000",
            "price": 24500,
            "thumbnail": "https://ik.imagekit.io/vtvggda66/kado/ebcf501011eb7839ea90fd7a1e440909.jpg?updatedAt=1710949817258",
            "category": "AM",
            "source": "shopee",
            "link": "https://shope.ee/3AXnherJpY",
            "terjual": "200+",
            "tag": "vintage",
            "gender": "unisex",
            "pool": "pernikahan"
        },
        {
            "id": 5,
            "title": "Mitochiba Food Chopper",
            "description": "Food Chopper Mitochiba mampu menggiling daging hingga halus, bumbu-bumbu dapur, membuat aneka bakso hingga MPASI Anak, sangat cocok untuk segala keperluan dapur.",
            "price_text": "Rp. 656.100",
            "price": 656100,
            "thumbnail": "https://ik.imagekit.io/vtvggda66/kado/id-11134207-7r98x-lmnbzhqfo1boe6.jpg?updatedAt=1710949817628",
            "category": "ED",
            "source": "shopee",
            "link": "https://shope.ee/4AQKtcKMaG",
            "terjual": "10RB+",
            "tag": "elektronik",
            "gender": "unisex",
            "pool": "pernikahan"
        },
        {
            "id": 6,
            "title": "Bedcover Set Sprei Anti Geser",
            "description": "Satu set sprei, bedcover, sarung bantal guling dan bonus tas bedcover. Dengan bahan katun pvc premium lembut, tidak luntur dan tidak berbulu.",
            "price_text": "Rp. 250.000 - Rp. 525.000",
            "price": 250000,
            "thumbnail": "https://ik.imagekit.io/vtvggda66/kado/sg-11134201-23010-gd5r3cxerhmve4.jpg?updatedAt=1710949817101",
            "category": "KT",
            "source": "shopee",
            "link": "https://shope.ee/VX2WoDSSN",
            "terjual": "500+",
            "tag": "aesthetic",
            "gender": "unisex",
            "pool": "pernikahan"
        },
        {
            "id": 7,
            "title": "Setelan Piyama Couple Rayon Twill Premium",
            "description": "Piyama Couple satu set atasan dan bawahan, bahan material kain rayon twill yang halus dan lembut dipakai. Nyaman dipakai untuk santai maupun untuk tidur.",
            "price_text": "Rp. 92.000 - Rp. 230.000",
            "price": 92000,
            "thumbnail": "https://ik.imagekit.io/vtvggda66/kado/id-11134207-7r98u-lmj01ctxkmck70.jpg?updatedAt=1710949817841",
            "category": "HP",
            "source": "shopee",
            "link": "https://shope.ee/fqSjEao4W",
            "terjual": "3RB+",
            "tag": "hampers",
            "gender": "unisex",
            "pool": "pernikahan"
        },
        // {
        //     "id": 8,
        //     "title": "Sajadah Couple Premium",
        //     "description": "Sajadah couple bonus pouch terbuat dari bahan kanvas premium anti air, lapisan bawah menggunakan synthetic leather, jadi lebih premium dan tidak licin.",
        //     "price_text": "Rp. 250.000",
        //     "price": 250000,
        //     "thumbnail": "https://ik.imagekit.io/vtvggda66/kado/id-11134207-7r98o-lkndljaz78k185.jpg?updatedAt=1710949818419",
        //     "category": "S",
        //     "source": "shopee",
        //     "link": "https://shope.ee/7A44GxLkgK",
        //     "terjual": "2RB+",
        //     "tag": "hampers",
        //     "gender": "unisex",
        //     "pool": "pernikahan"
        // },
        // {
        //     "id": 9,
        //     "title": "Hampers Sajadah Travel",
        //     "description": "Sajadah travel couple dilengkapi dengan tasbih 2 pcs, greetingcard custom, paperbag dan box hampers mika cantik.",
        //     "price_text": "Rp. 59.000",
        //     "price": 59000,
        //     "thumbnail": "https://ik.imagekit.io/vtvggda66/kado/06629d15c77163689b512c8f018dd8d5.jpg?updatedAt=1710950214065",
        //     "category": "S",
        //     "source": "shopee",
        //     "link": "https://shope.ee/8KG1fB25k9",
        //     "terjual": "2RB+",
        //     "tag": "hampers",
        //     "gender": "unisex",
        //     "pool": "pernikahan"
        // },
        {
            "id": 10,
            "title": "Bedcover Polos 200x220 Double Plain",
            "description": "Bedcover polos banyak pilihan warna. Jahitan lebih rapat, kain halus, lembut dan tidak berbulu. Bahan kain Katun Microdispers dan dakron Silicon grade A.",
            "price_text": "Rp. 160.000 - Rp. 190.000",
            "price": 160000,
            "thumbnail": "https://ik.imagekit.io/vtvggda66/kado/sg-11134201-22110-u0ehnntnaljv17.jpg?updatedAt=1710950213529",
            "category": "KT",
            "source": "shopee",
            "link": "https://shope.ee/LDk8noSCe",
            "terjual": "3RB+",
            "tag": "aesthetic",
            "gender": "unisex",
            "pool": "pernikahan"
        },
        {
            "id": 11,
            "title": "Gift Set Box Handuk 70x140cm Couple",
            "description": "Hampers dua buah handuk microfiber ukuran dewasa (70x140cm) dengan di hiasi bunga kering yang cantik dan juga kartu ucapan.",
            "price_text": "Rp. 129.000 - Rp. 139.999",
            "price": 129000,
            "thumbnail": "https://ik.imagekit.io/vtvggda66/kado/sg-11134201-23010-ok7z22fu9qlv2c.jpg?updatedAt=1710950213825",
            "category": "HP",
            "source": "shopee",
            "link": "https://shope.ee/1fj7jJ06nx",
            "terjual": "10RB+",
            "tag": "hampers",
            "gender": "unisex",
            "pool": "pernikahan"
        },
        {
            "id": 12,
            "title": "Royal Cutlery Set Perlengkapan Makan 24PCS",
            "description": "Perlengkapan sendok garpu pisau ini cocok dipakai untuk perlengkapan acara makan formal karena desain warnanya yang mewah.",
            "price_text": "Rp. 135.000 - Rp. 175.000",
            "price": 135000,
            "thumbnail": "https://down-id.img.susercontent.com/file/c7b2927cf19e8eceb4990ea539ed69de",
            "category": "AM",
            "source": "shopee",
            "link": "https://shope.ee/1L6HKnu0rZ",
            "terjual": "1RB+",
            "tag": "mewah",
            "gender": "unisex",
            "pool": "pernikahan"
        },
        {
            "id": 13,
            "title": "Reed Diffuser and Scented Candle",
            "description": "Satu paket reed diffuser yang sudah dilengkapi 5 batang rotan dan scented candle dengan banyak pilihan aroma yang menenangkan. Bonus kartu ucapan dan pita cantik.",
            "price_text": "Rp. 169.000 - Rp. 179.000",
            "price": 169000,
            "thumbnail": "https://down-id.img.susercontent.com/file/1bd73c27e476b6e9fbe8af3a7b2798d8",
            "category": "KT",
            "source": "shopee",
            "link": "https://shope.ee/6zke5HjkTw",
            "terjual": "4RB+",
            "tag": "aromatherapy",
            "gender": "wanita",
            "pool": "pernikahan"
        },
        {
            "id": 14,
            "title": "LocknLock Special Gift Set Isi 5pcs",
            "description": "5pcs Plastic Container BPA Free. Aman untuk tubuh dan kedap air ataupun udara. Mampu menyimpan makanan lebih lama dan tidak tumpah. Di lengkapin dengan gift box untuk di berikan sebagai hadiah.",
            "price_text": "Rp. 204.000",
            "price": 204000,
            "thumbnail": "https://down-id.img.susercontent.com/file/50a94c15f36f38dae5fbc41018ed149c",
            "category": "ALL",
            "source": "shopee",
            "link": "https://shope.ee/6UoNUUIR1A",
            "terjual": "7RB+",
            "tag": "bekal",
            "gender": "wanita",
            "pool": "pernikahan"
        },
        {
            "id": 15,
            "title": "Gaabor Airfryer 2.5Liter",
            "description": "Airfryer dengan kapasitas super besar 2.5 Liter dan daya listrik 800 Watt. Dirancang dengan pegangan anti panas, loyang anti lengket yang dapat dilepas, dan pengaturan mati daya otomatis.",
            "price_text": "Rp. 249.900",
            "price": 249900,
            "thumbnail": "https://down-id.img.susercontent.com/file/sg-11134201-7rbnj-lluaws2hzimdc4",
            "category": "ED",
            "source": "shopee",
            "link": "https://shope.ee/1VPhXL9RlA",
            "terjual": "700+",
            "tag": "airfryer",
            "gender": "unisex",
            "pool": "pernikahan"
        },
        {
            "id": 16,
            "title": "Oven Listrik Han River Low Watt (800 Watt)",
            "description": "Han River oven elektrik dengan kapasitas hingga 12 L. Oven ini terbuat dari stainless steel serta memiliki elemen pemanas atas dan bawah.",
            "price_text": "Rp. 189.000",
            "price": 189000,
            "thumbnail": "https://down-id.img.susercontent.com/file/id-11134201-7qul0-lets5j29kjedca",
            "category": "ED",
            "source": "shopee",
            "link": "https://shope.ee/A9ht1rSuVF",
            "terjual": "10RB+",
            "tag": "masak",
            "gender": "unisex",
            "pool": "pernikahan"
        },
        {
            "id": 17,
            "title": "Gaabor Vacuum Cleaner Kapasitas 1.5 Liter",
            "description": "Vacuum Cleaner dengan daya hisap kuat dan dapat digunakan diberbagai macam permukaan seperti lantai, karpet, hingga sofa.",
            "price_text": "Rp. 215.900 - Rp. 277.000",
            "price": 215900,
            "thumbnail": "https://down-id.img.susercontent.com/file/id-11134207-7r98r-lnace0jwbix5c7",
            "category": "ER",
            "source": "shopee",
            "link": "https://shope.ee/6KVASqXtcu",
            "terjual": "10RBB+",
            "tag": "perabotan",
            "gender": "unisex",
            "pool": "pernikahan"
        },
        {
            "id": 18,
            "title": "Set Pisau Diamond Steincookware (6pcs)",
            "description": "Diamond knife dengan tampilan cantik dan berfungsi memotong apapun dan tidak akan menempel di pisau. 6 in 1 terdiri dari 4 pisau, 1 gunting dan 1 bonus pengasah pisau.",
            "price_text": "Rp. 189.050",
            "price": 189050,
            "thumbnail": "https://down-id.img.susercontent.com/file/b2b31c3ca4f11de770808444494c0588",
            "category": "ALL",
            "source": "shopee",
            "link": "https://shope.ee/89woeFC9aK",
            "terjual": "10RB+",
            "tag": "dapur",
            "gender": "wanita",
            "pool": "pernikahan"
        },
        {
            "id": 19,
            "title": "Coffee Maker Kris 125 Ml",
            "description": "Coffee maker praktis bisa digunakan untuk membuat teh, kopi bubuk atau biji kopi yang sudah digiling. Kapasitas 125 ml dan daya rendah 350 Watt.",
            "price_text": "Rp. 149.900",
            "price": 149900,
            "thumbnail": "https://down-id.img.susercontent.com/file/sg-11134201-23010-sn5sy4peq6lv07",
            "category": "TCM",
            "source": "shopee",
            "link": "https://shope.ee/4zzmsTIb5s",
            "terjual": "4RB+",
            "tag": "kopi",
            "gender": "pria",
            "pool": "pernikahan"
        },
        {
            "id": 20,
            "title": "Oxone Pemanggang Roti Warna Pastel Pink & Green",
            "description": "Pop Up Toaster dengan bentuk yang elegan dan pilihan warna pastel yang cantik. Dengan daya yang rendah, hanya 500 Watt.",
            "price_text": "Rp. 339.900",
            "price": 339900,
            "thumbnail": "https://down-id.img.susercontent.com/file/1cfd3ad598e031bb9f1ead8d01fc5fe4",
            "category": "TCM",
            "source": "shopee",
            "link": "https://shope.ee/8zeDIfjZ1R",
            "terjual": "100+",
            "tag": "sarapan",
            "gender": "unisex",
            "pool": "pernikahan"
        },
        {
            "id": 21,
            "title": "Glow Pan Steincookware Set dan Satuan",
            "description": "Pan anti lengket dengan 2 pilihan warna pink dan blue. Satu set terdiri dari 5pcs yaitu Wok 26cm + Lid tutup kaca, Frypan 22cm (no lid), dan Saucepan 16cm + Lid tutup kaca.",
            "price_text": "Rp. 227.000 - Rp. 799.000",
            "price": 227000,
            "thumbnail": "https://down-id.img.susercontent.com/file/sg-11134201-22100-su1wwikfo2iv50",
            "category": "ALL",
            "source": "shopee",
            "link": "https://shope.ee/9USCEoDFv0",
            "terjual": "6RB+",
            "tag": "masak",
            "gender": "wanita",
            "pool": "pernikahan"
        },
        {
            "id": 22,
            "title": "Logam Mulia Antam Samawa 0.1 Gr",
            "description": "Logam Mulia dengan desain eksklusif untuk hadiah pernikahan. Lengkap dengan sertifikasi asli PT. Antam Tbk. Kadar emas 999,9 Gold Bar dan berat 0,1 gram.",
            "price_text": "Rp. 158.900",
            "price": 158900,
            "thumbnail": "https://down-id.img.susercontent.com/file/sg-11134201-22120-5k3pbs5tn0kv99",
            "category": "ALL",
            "source": "shopee",
            "link": "https://shope.ee/1czK5qoVpP",
            "terjual": "400+",
            "tag": "emas",
            "gender": "unisex",
            "pool": "pernikahan"
        },
        {
            "id": 23,
            "title": "Tumbler Thermos Vacuum Stainless Steel",
            "description": "Tumbler dengan material stainless steel berkualitas tinggi dan memiliki daya tahan panas hingga 12 jam. Dilengkapi dengan tutup anti tumpah.",
            "price_text": "Rp. 70.000 - Rp. 129.000",
            "price": 70000,
            "thumbnail": "https://down-id.img.susercontent.com/file/sg-11134201-22110-2v0m5o8elwlc0",
            "category": "AM",
            "source": "shopee",
            "link": "https://shope.ee/8lBcPRbpyS",
            "terjual": "4RB+",
            "tag": "outdoor",
            "gender": "unisex",
            "pool": "pernikahan"
        },
        {
            "id": 24,
            "title": "Musik Box Kayu Carving Vintage",
            "description": "Musik box dengan desain vintage yang cantik, terbuat dari bahan kayu berkualitas tinggi dengan ukiran yang detail dan halus.",
            "price_text": "Rp. 80.000 - Rp. 90.000",
            "price": 80000,
            "thumbnail": "https://down-id.img.susercontent.com/file/sg-11134201-23020-1ncu4o1zvbnwd7",
            "category": "HP",
            "source": "shopee",
            "link": "https://shope.ee/Vi51kSv7MD",
            "terjual": "2RB+",
            "tag": "unik",
            "gender": "unisex",
            "pool": "pernikahan"
        },
        {
          "id": 25,
          "title": "Sanken Dispenser Galon Bawah",
          "description": "Sanken Water Dispenser dengan teknologi galon bawah. Tangki terbuat dari 100% stainless steel sehingga lebih higienis, anti karat, anti rat cocok untuk kebutuhan keluarga di rumah. Lebih hemat listrik hingga 30%, anti jamur, kuman, dan bakteri.",
          "price_text": "Rp. 1.675.000",
          "price": 1675000,
          "thumbnail": "https://down-id.img.susercontent.com/file/f095e530680068b4b8655154d8a15afe",
          "category": "ED",
          "source": "shopee",
          "link": "https://shope.ee/9K8m2ac3wQ",
          "terjual": "4RB+",
          "tag": "perabotan",
          "gender": "unisex",
          "pool": "pernikahan"
        },
        {
          "id": 26,
          "title": "INTHEBOX Alpha Kasur Spring Bed (FREE Bantal)",
          "description": "Kasur spring bed Alpha INTHEBOX dengan busa premium kepadatan tinggi yang dilapisi kain supersoft menambah kenyamanan tidur dan cocok untuk digunakan sehari-hari.",
          "price_text": "Rp. 969.030 - Rp. 1.939.030",
          "price": 969030,
          "thumbnail": "https://down-id.img.susercontent.com/file/id-11134201-23030-3xhcs0la6gov8a",
          "category": "KT",
          "source": "shopee",
          "link": "https://shope.ee/3KrYtacqzw",
          "terjual": "10RB+",
          "tag": "tidur",
          "gender": "unisex",
          "pool": "pernikahan"
        },
        {
          "id": 27,
          "title": "Domi Bantal Korean Microfiber Grey (2pcs)",
          "description": "Bantal DOMI microfiber dibuat dengan bahan Premium Korean Microfiber. Dapat mengikuti lengkungan alami kepala sehingga meringankan tekanan pada leher dan pundak selama tidur.",
          "price_text": "Rp. 275.000",
          "price": 275000,
          "thumbnail": "https://down-id.img.susercontent.com/file/6f606f50009e4b8725527c567148fe53",
          "category": "KT",
          "source": "shopee",
          "link": "https://shope.ee/2Kz1hmo6PB",
          "terjual": "1RB+",
          "tag": "tidur",
          "gender": "unisex",
          "pool": "pernikahan"
        },
        {
          "id": 28,
          "title": "Denpoo Kompor Induksi Listrik Low Watt DIC 200-800 W",
          "description": "Kompor induksi touchscreen denpoo listrik dilengkapi dengan 8 penyesuaian daya mulai dari 200 sampai maksimal 800 watt.",
          "price_text": "Rp. 324.000",
          "price": 324000,
          "thumbnail": "https://down-id.img.susercontent.com/file/e8cf47acef723f49115758435ab4d1ab",
          "category": "ED",
          "source": "shopee",
          "link": "https://shope.ee/1An4JfEPgo",
          "terjual": "1RB+",
          "tag": "masak",
          "gender": "wanita",
          "pool": "pernikahan"
        },
        {
          "id": 29,
          "title": "Setrika Uap Philips 400 W GC1418",
          "description": "Setrika Philips GC1418 merupakan perangkat setrika uap yang di lengkapi dengan fitur semprot yang mengarah langsung ke bagian pakaian.",
          "price_text": "Rp. 299.900",
          "price": 299900,
          "thumbnail": "https://down-id.img.susercontent.com/file/sg-11134201-7rbld-lmgxzcpd0g058c",
          "category": "ER",
          "source": "shopee",
          "link": "https://shope.ee/4fUJfCqWyu",
          "terjual": "4RB+",
          "tag": "perabotan",
          "gender": "unisex",
          "pool": "pernikahan"
        },
        {
          "id": 30,
          "title": "Setrika Uap Genggam Garmentt Steamer Philips STH3010",
          "description": "Steamer genggam Seri 3000 dirancang agar ringan, ringkas, dan bisa dilipat sehingga mudah digunakan dan disimpan. Pakaian Anda selalu rapi kapan saja, di mana saja. Alat ini adalah pendamping sempurna untuk merapikan baju di rumah atau di perjalanan.",
          "price_text": "Rp. 552.000",
          "price": 552000,
          "thumbnail": "https://down-id.img.susercontent.com/file/sg-11134201-23020-ke79tl2k10mv27",
          "category": "ER",
          "source": "shopee",
          "link": "https://shope.ee/4pnjrVptdx",
          "terjual": "300+",
          "tag": "laundry",
          "gender": "wanita",
          "pool": "pernikahan"
        },
        {
          "id": 31,
          "title": "Kadonio Setrika Uap Portabel 600W Low Watt",
          "description": "Setrika uap portable konsumsi daya rendah 600W. Sakelar satu tombo, hanya dengan menekan tombol secara mudah, uap yang kuat membantu Anda menyetrika pakaian lebih cepat. 120ml tangki air transparan yang dapat dilepas jadi jumlah air terlihat jelas.",
          "price_text": "Rp. 96.000 - Rp. 145.000",
          "price": 96000,
          "thumbnail": "https://down-id.img.susercontent.com/file/id-11134207-7qul3-lj85epbh7bdj86",
          "category": "ER",
          "source": "shopee",
          "link": "https://shope.ee/507A3opGJ0",
          "terjual": "700+",
          "tag": "laundry",
          "gender": "wanita",
          "pool": "pernikahan"
        },
        {
          "id": 32,
          "title": "SEKAI Pemanggang Roti Toaster Sandwich Waffle",
          "description": "TS 891 merupakan produk perangkat elektronik dapur yang cocok digunakan sebagai panggangan roti.",
          "price_text": "Rp. 150.500 - Rp. 170.000",
          "price": 150500,
          "thumbnail": "https://down-id.img.susercontent.com/file/0f6557c4a548b7b52e861807446e6dcc",
          "category": "TCM",
          "source": "shopee",
          "link": "https://shope.ee/5AQaG7ocy3",
          "terjual": "10RB+",
          "tag": "sarapan",
          "gender": "unisex",
          "pool": "pernikahan"
        },
        {
          "id": 33,
          "title": "Termos botol minum set",
          "description": "Vacuum bottle flask set dengan kapasitas 500ml kemasan gift box.",
          "price_text": "Rp. 51.800 - Rp. 58.500",
          "price": 51800,
          "thumbnail": "https://down-id.img.susercontent.com/file/id-11134207-7qukx-lh47e7d18kvfcd",
          "category": "AM",
          "source": "shopee",
          "link_affiliate": "https://shope.ee/1qB3wYTO5p",
          "terjual": "400+",
          "tag": "minum",
          "gender": "unisex",
          "pool": "pernikahan"
        },
        {
          "id": 34,
          "title": "Peralatan mandi aesthetic",
          "description": "Kado Pernikahan berisi peralatan mandi bermanfaat & aesthetic dikemas dengan box cantik.",
          "price_text": "Rp. 85.000 - Rp. 95.000",
          "price": 85000,
          "thumbnail": "https://down-id.img.susercontent.com/file/id-11134207-7qukz-ljojg2k90kwf67",
          "category": "ALL",
          "source": "shopee",
          "link_affiliate": "https://shope.ee/1LEnLdVI6k",
          "terjual": "2RB+",
          "tag": "aesthetic",
          "gender": "unisex",
          "pool": "pernikahan"
        },
        // {
        //   "id": 35,
        //   "title": "Set sajadah turki couple",
        //   "description": "1 Paket box jinjing berisi 2 bUAH sajadah turki dan 2 buas tasbih kayu termasuk kartu ucapan berisi doa.",
        //   "price_text": "Rp. 79.800 - Rp. 84.000",
        //   "price": 79800,
        //   "thumbnail": "https://down-id.img.susercontent.com/file/sg-11134201-22110-nchjotm0xpjv20",
        //   "category": "S",
        //   "source": "shopee",
        //   "link_affiliate": "https://shope.ee/1VYDXwUeln",
        //   "terjual": "10RB+",
        //   "tag": "ibadah",
        //   "gender": "unisex",
        //   "pool": "pernikahan"
        // },
        {
          "id": 36,
          "title": "Souvenir mangkok",
          "description": "Mangkuk Jepang Set dengan sumpit bambu handmade dan handpainted.",
          "price_text": "Rp. 78.999 - Rp. 82.999",
          "price": 78999,
          "thumbnail": "https://down-id.img.susercontent.com/file/bd126788ebe031198b05fbe9fff6105f",
          "category": "AM",
          "source": "shopee",
          "link_affiliate": "https://shope.ee/2L7KXTRU4y",
          "terjual": "4RB+",
          "tag": "handmade",
          "gender": "wanita",
          "pool": "pernikahan"
        },
        {
          "id": 37,
          "title": "Hampers Handuk couple Mrs & Mr",
          "description": "Hampers terdiri dari 2 Handuk size 70x140 cm free kartu ucapan danf ree kardus.",
          "price_text": "Rp. 65.000",
          "price": 65000,
          "thumbnail": "https://down-id.img.susercontent.com/file/id-11134207-7qukx-libb78ohdme1d8",
          "category": "HP",
          "source": "shopee",
          "link_affiliate": "https://shope.ee/2VQkjmQqk1",
          "terjual": "1RB+",
          "tag": "hampers",
          "gender": "unisex",
          "pool": "pernikahan"
        },
        {
          "id": 38,
          "title": "Gift set aromaterapi",
          "description": "REED DIFFUSER 50ml + 5 stik rotan, lilin aromaterapi 60gr dengan packaging hangtag dan request ucapan.",
          "price_text": "Rp. 42.200",
          "price": 42200,
          "thumbnail": "https://down-id.img.susercontent.com/file/0cdba99ac23a628ee9fe750a953bca48",
          "category": "KT",
          "source": "shopee",
          "link_affiliate": "https://shope.ee/2AnuLOZWcC",
          "terjual": "8RB+",
          "tag": "aromaterapi",
          "gender": "wanita",
          "pool": "pernikahan"
        },
        {
          "id": 39,
          "title": "Hampers Wedding Set Piyama Couple",
          "description": "Hampers piyama couple dengan custom gift card, bunga hias dan packaging cantik.",
          "price_text": "Rp. 136.999",
          "price": 136999,
          "thumbnail": "https://down-id.img.susercontent.com/file/e3966ecabff8fe210b83c8a4c962a62b",
          "category": "HP",
          "source": "shopee",
          "link_affiliate": "https://shope.ee/20UU95a9xB",
          "terjual": "7RB+",
          "tag": "couple",
          "gender": "unisex",
          "pool": "pernikahan"
        },
        {
          "id": 40,
          "title": "Jam dan dompet couple",
          "description": "Satu set hadiah jam tangan atau dompet dengan box dan free kartu ucapan.",
          "price_text": "Rp. 144.000 - Rp. 175.000",
          "price": 144000,
          "thumbnail": "https://down-id.img.susercontent.com/file/f72054f0432ae713fa6d9b860f4ec321",
          "category": "ALL",
          "source": "shopee",
          "link_affiliate": "https://shope.ee/2VQkk0YFwI",
          "terjual": "800+",
          "tag": "couple",
          "gender": "unisex",
          "pool": "pernikahan"
        },
        {
          "id": 41,
          "title": "Jam Dinding Akrilik",
          "description": "Jam dinding akrilik 30cm tebal akrilik 3mm custom foto dan teks ucapan.",
          "price_text": "Rp. 150.000",
          "price": 150000,
          "thumbnail": "https://down-id.img.susercontent.com/file/a15915dfd5fda0226c86185529c65476",
          "category": "KT",
          "source": "shopee",
          "link_affiliate": "https://shope.ee/2L7KXhYtHH",
          "terjual": "500+",
          "tag": "couple",
          "gender": "unisex",
          "pool": "pernikahan"
        },
        {
          "id": 42,
          "title": "PAKET SESERAHAN, KADO PERNIKAHAN PERLENGKAPAN MANDI",
          "description": "Seserahan Hantaran Kado Hadiah Pernikahan Perlengkapan Mandi Parfum paket terdiri dari 8 item.",
          "price_text": "Rp. 150.000",
          "price": 150000,
          "thumbnail": "https://down-id.img.susercontent.com/file/a4c622f90802279726f9fc15e0ecff6a",
          "category": "ALL",
          "source": "shopee",
          "link_affiliate": "https://shope.ee/1VYDYAc3y8",
          "terjual": "800+",
          "tag": "seserahan",
          "gender": "unisex",
          "pool": "pernikahan"
        },
        {
          "id": 43,
          "title": "LED akrilik",
          "description": "Abadikan moment berharga di Lampu led akrilik. Digrafir dengan mesin laser, hasil sangat rapi dan awet bertahun-tahun.",
          "price_text": "Rp. 142.000",
          "price": 142000,
          "thumbnail": "https://down-id.img.susercontent.com/file/4e0a7414727db40c0622c1e62644d1ba",
          "category": "KT",
          "source": "shopee",
          "link_affiliate": "https://shope.ee/4pofWU38K2",
          "terjual": "1RB+",
          "tag": "custom",
          "gender": "unisex",
          "pool": "pernikahan"
        },
        {
          "id": 44,
          "title": "Organic treasure",
          "description": "Paket hampers 5 in 1 berisi wewangin mulai dari linen spray sampai reed diffuser.",
          "price_text": "Rp. 117.534 - Rp. 118.560",
          "price": 117534,
          "thumbnail": "https://down-id.img.susercontent.com/file/id-11134207-7qul5-lissu97q2yqf44",
          "category": "KT",
          "source": "shopee",
          "link_affiliate": "https://shope.ee/4fVFKB3lf1",
          "terjual": "8RB+",
          "tag": "hampers",
          "gender": "unisex",
          "pool": "pernikahan"
        },
        {
          "id": 45,
          "title": "Dekayu Hampers",
          "description": "Hampers alat makan kayu dengan box dan free kartu ucapan.",
          "price_text": "Rp. 265.500",
          "price": 265500,
          "thumbnail": "https://down-id.img.susercontent.com/file/id-11134207-7qul0-ljwd8eyi9vnj9f",
          "category": "AM",
          "source": "shopee",
          "link_affiliate": "https://shope.ee/4VBp7s4P00",
          "terjual": "100+",
          "tag": "hampers",
          "gender": "wanita",
          "pool": "pernikahan"
        },
        {
          "id": 46,
          "title": "Carramica Gelas Keramik Ocha Black Mamba",
          "description": "Gelas keramik limited series dari Carramica.",
          "price_text": "Rp. 235.800 - Rp. 314.100",
          "price": 235800,
          "thumbnail": "https://down-id.img.susercontent.com/file/1d0be05dd606dbd0bd8776c9e00d780a",
          "category": "AM",
          "source": "shopee",
          "link_affiliate": "https://shope.ee/4KsOvZ52Kz",
          "terjual": "100+",
          "tag": "keramik",
          "gender": "unisex",
          "pool": "pernikahan"
        },
        // {
        //   "id": 47,
        //   "title": "Mahar alat solat",
        //   "description": "Hampers set berisi mukena, sajadah besar, alquran, tasbih dan box.",
        //   "price_text": "Rp. 295.000",
        //   "price": 295000,
        //   "thumbnail": "https://down-id.img.susercontent.com/file/63b7d7e8cb8c68a8e491687f9b073207",
        //   "category": "S",
        //   "source": "shopee",
        //   "link_affiliate": "https://shope.ee/4AYyjG5ffy",
        //   "terjual": "4RB+",
        //   "tag": "ibadah",
        //   "gender": "unisex",
        //   "pool": "pernikahan"
        // },
        {
          "id": 48,
          "title": "Kado Pengantin Frame 25x20",
          "description": "Kado pernikahan couple frame 3D dengan dekorasi bunga, foto, ucapan, dan karakter boneka flanel baju adat",
          "price_text": "Rp. 210.000",
          "price": 210000,
          "thumbnail": "https://down-id.img.susercontent.com/file/ee265c57740cf6193499548078010a48",
          "category": "ALL",
          "source": "shopee",
          "link_affiliate": "https://shope.ee/5Kkw7b0Zlk",
          "terjual": "40+",
          "tag": "handmade",
          "gender": "unisex",
          "pool": "pernikahan"
        },
        {
          "id": 49,
          "title": "Four Season Tealosofi - Tea Gift in Box",
          "description": "Souvenir Hampers Teh Kado Four Season Series Tealosofi.",
          "price_text": "Rp. 228.000",
          "price": 228000,
          "thumbnail": "https://down-id.img.susercontent.com/file/sg-11134201-23020-4z26ubpjybnvf6",
          "category": "ALL",
          "source": "shopee",
          "link_affiliate": "https://shope.ee/5V4MJtzwQn",
          "terjual": "30+",
          "tag": "unik",
          "gender": "wanita",
          "pool": "pernikahan"
        },
        {
          "id": 50,
          "title": "Jesou (kado dompet, jam, gantungan, pulpen)",
          "description": "Souvenir Hampers Teh Kado Four Season Series Tealosofi.",
          "price_text": "Rp. 310.000",
          "price": 310000,
          "thumbnail": "https://down-id.img.susercontent.com/file/205dc1e9b52b610d4ee7a9a00b0bca22",
          "category": "ALL",
          "source": "shopee",
          "link_affiliate": "https://shope.ee/5fNmWCzJ5q",
          "terjual": "10+",
          "tag": "fashion",
          "gender": "unisex",
          "pool": "pernikahan"
        },
        {
          "id": 51,
          "title": "Set Kamar Mandi Marmer",
          "description": "Set Kamar Mandi Marmer | Bathroom Accessories Premium Material Marmer.",
          "price_text": "Rp. 330.000 - Rp. 340.000",
          "price": 330000,
          "thumbnail": "https://down-id.img.susercontent.com/file/id-11134207-7r98p-lmn8f2pewr38a9",
          "category": "ALL",
          "source": "shopee",
          "link_affiliate": "https://shope.ee/5phCiVyfkt",
          "terjual": "150+",
          "tag": "bathroom",
          "gender": "unisex",
          "pool": "pernikahan"
        },
        {
          "id": 52,
          "title": "Flower Box Bunga Mawar",
          "description": "Bouquet Bunga asli dan plastik untuk berbagai momen dan acara.",
          "price_text": "Rp. 365.000",
          "price": 365000,
          "thumbnail": "https://down-id.img.susercontent.com/file/2f40ccbd3a40d83435eda91086d61a9f",
          "category": "ALL",
          "source": "shopee",
          "link_affiliate": "https://shope.ee/9zWlgAioIi",
          "terjual": "10+",
          "tag": "buket",
          "gender": "wanita",
          "pool": "pernikahan"
        },
        {
          "id": 53,
          "title": "Paket Kado Hampers Handuk Premium BEVERLY 4 in 1 + Exclusive BOX",
          "description": "Handuk Premium yang terbuat dari bahan Natural Cotton with Anti bacteria, lembut dan berdaya serap tinggi.",
          "price_text": "Rp. 379.000",
          "price": 379000,
          "thumbnail": "https://down-id.img.susercontent.com/file/2101962c061fc3b6c782662f7e38c82c",
          "category": "HP",
          "source": "shopee",
          "link_affiliate": "https://shope.ee/9KH4t7CJT1",
          "terjual": "10+",
          "tag": "premium",
          "gender": "unisex",
          "pool": "pernikahan"
        },
        {
          "id": 54,
          "title": "Reed Diffuser and Scented Candle gift set",
          "description": "Ciptakan ruangan impian dengan 100% Essential Oil, Reed Diffuser dan Scented Candle untuk keharuman yang istimewa.",
          "price_text": "Rp. 389.000",
          "price": 389000,
          "thumbnail": "https://down-id.img.susercontent.com/file/sg-11134201-22100-wp4ui0ql9iiv88",
          "category": "KT",
          "source": "shopee",
          "link_affiliate": "https://shope.ee/AUT2HG7s6G",
          "terjual": "40+",
          "tag": "aromaterapi",
          "gender": "wanita",
          "pool": "pernikahan"
        },
        {
          "id": 55,
          "title": "Mecoo Most Aesthetic 6 In 1 Antibacterial Pisau Set Knife Set Pisau Dapur",
          "description": "1 Set pisau terdiri dari 6pcs Pisau anti lengket titanium rose gold.",
          "price_text": "Rp. 600.000",
          "price": 600000,
          "thumbnail": "https://down-id.img.susercontent.com/file/id-11134201-7r98v-llb6pm8o31g2c3",
          "category": "ALL",
          "source": "shopee",
          "link_affiliate": "https://shope.ee/3fcjPLZF62",
          "terjual": "2RB+",
          "tag": "dapur",
          "gender": "wanita",
          "pool": "pernikahan"
        },
        {
          "id": 56,
          "title": "MADAME Teapot Set gift wedding",
          "description": "MADAME TEAPOT SET terdiri dari 1 pc Teapot, 4 pcs Cup, dan 4 pcs Saucer.",
          "price_text": "Rp. 690.000",
          "price": 690000,
          "thumbnail": "https://down-id.img.susercontent.com/file/id-11134201-7r98x-llc02tt8idh880",
          "category": "AM",
          "source": "shopee",
          "link_affiliate": "https://shope.ee/A9qBse98mE",
          "terjual": "40+",
          "tag": "dapur",
          "gender": "wanita",
          "pool": "pernikahan"
        },
        {
          "id": 57,
          "title": "Le Senteurs Grateful Package Wedding Gift",
          "description": "Paket gift diffuser, flower, coaster, linen spray, candle, bracelet, dengan wooden acrylic box dan silk ribbon.",
          "price_text": "Rp. 690.000",
          "price": 690000,
          "thumbnail": "https://down-id.img.susercontent.com/file/id-11134201-7r98x-llc02tt8idh880",
          "category": "ALL",
          "source": "shopee",
          "link_affiliate": "https://shope.ee/A9qBse98mE",
          "terjual": "50+",
          "tag": "aesthetic",
          "gender": "wanita",
          "pool": "pernikahan"
        },
        {
          "id": 58,
          "title": "Obliviate Rose Gold Tennis Bracelet Jewelry (Adjustable)",
          "description": "Aksesoris Perhiasan Gelang Wanita Lapis Emas Asli 18K Gold Plated.",
          "price_text": "Rp. 965.000",
          "price": 965000,
          "thumbnail": "https://down-id.img.susercontent.com/file/id-11134207-7qul1-lf6f2ehh5ola59",
          "category": "ALL",
          "source": "shopee",
          "link_affiliate": "https://shope.ee/2AnuM6iM7z",
          "terjual": "60+",
          "tag": "perhiasan",
          "gender": "wanita",
          "pool": "pernikahan"
        },
        {
          "id": 59,
          "title": "Paket Gift Wedding plus EMAS Motif Kayu 2D (20x30)",
          "description": "Gift ucapan wedding frame kayu dengan bunga rustic dan emas.",
          "price_text": "Rp. 1.000.000",
          "price": 1000000,
          "thumbnail": "https://down-id.img.susercontent.com/file/sg-11134201-22120-s1n15efot0kv12",
          "category": "ALL",
          "source": "shopee",
          "link_affiliate": "https://shope.ee/LMGAjpKqe",
          "terjual": "140+",
          "tag": "rustic",
          "gender": "unisex",
          "pool": "pernikahan"
        },
        {
          "id": 60,
          "title": "LM Emas Logam Mulia 0.5 Gram",
          "description": "Logam Mulia yang kami 100% asli., sertifikat tertera di belakang kemasan press.",
          "price_text": "Rp. 622.000",
          "price": 622000,
          "thumbnail": "https://down-id.img.susercontent.com/file/ddc894372093d4d24e631ba78abc99fb",
          "category": "ALL",
          "source": "shopee",
          "link_affiliate": "https://shope.ee/VfgN2ohVh",
          "terjual": "250+",
          "tag": "logammulia",
          "gender": "unisex",
          "pool": "pernikahan"
        },
        {
          "id": 61,
          "title": "Antam 0.5 gram seri gift Happy Wedding plus amplop",
          "description": "Antam gift series ORI logam mulia 0.5 gr 24 karat motif happy wedding free amplop dan kartu ucapan.",
          "price_text": "Rp. 736.000",
          "price": 736000,
          "thumbnail": "https://down-id.img.susercontent.com/file/c4bf0539676f45ee69b83e3134bf120b",
          "category": "ALL",
          "source": "shopee",
          "link_affiliate": "https://shope.ee/jPm7qbWc",
          "terjual": "70+",
          "tag": "antam",
          "gender": "unisex",
          "pool": "pernikahan"
        },
        {
          "id": 62,
          "title": "Paket souvenir wedding • wax chocolate gift",
          "description": "Wax chocolate gift cocok untuk souvenir pernikahan.",
          "price_text": "Rp. 1.000.000",
          "price": 1000000,
          "thumbnail": "https://down-id.img.susercontent.com/file/id-11134207-7r98w-lm69p67iev7w3f",
          "category": "ALL",
          "source": "shopee",
          "link_affiliate": "https://shope.ee/jPm7qbWc",
          "terjual": "5+",
          "tag": "souvenir",
          "gender": "wanita",
          "pool": "pernikahan"
        },
        {
          "id": 63,
          "title": "Kado Nikah | Antam Fine Gold",
          "description": "Logam Mulia - Antam Emas Kita.",
          "price_text": "Rp. 759.900 - Rp. 3.622.300",
          "price": 759900,
          "thumbnail": "https://down-id.img.susercontent.com/file/id-11134201-23030-h0bdnkqb6gov86",
          "category": "ALL",
          "source": "shopee",
          "link_affiliate": "https://shope.ee/6fGL0F6kYM",
          "terjual": "400+",
          "tag": "gold",
          "gender": "unisex",
          "pool": "pernikahan"
        },
        {
          "id": 64,
          "title": "[CUSTOM INSTAN] Buket Bunga Uang Bucket Uang",
          "description": "Money bouquet made by order bisa custom.",
          "price_text": "Rp. 1.275.000 - Rp. 8.350.000",
          "price": 1275000,
          "thumbnail": "https://down-id.img.susercontent.com/file/id-11134207-7r98v-lmh51vwnrwcu9f",
          "category": "ALL",
          "source": "shopee",
          "link_affiliate": "https://shope.ee/1qB3xjHMRK",
          "terjual": "50+",
          "tag": "buket",
          "gender": "wanita",
          "pool": "pernikahan"
        },
        {
          "id": 65,
          "title": "Face Pattern Custom Kado Hampers Graduation Wedding Birthday",
          "description": "Cocok untuk hadiah ulang tahun, graduation, pernikahan, baby shower, welcoming baby, dll.",
          "price_text": "Rp. 2.800.000",
          "price": 2800000,
          "thumbnail": "https://down-id.img.susercontent.com/file/382bfeb020ee13c747a8dc5dcd3c4382",
          "category": "ALL",
          "source": "shopee",
          "link_affiliate": "https://shope.ee/1frdlQHzmJ",
          "terjual": "50+",
          "tag": "custom",
          "gender": "wanita",
          "pool": "pernikahan"
        }]

  const products = [
    {
      text: "This is comment one.",
      avatar: "https://via.placeholder.com/50",
      fullname: "John Doe",
      date: "2024-07-01"
    },
    {
      text: "This is comment two.",
      avatar: "https://via.placeholder.com/50",
      fullname: "Jane Smith",
      date: "2024-07-02"
    },
    {
      text: "This is comment three.",
      avatar: "https://via.placeholder.com/50",
      fullname: "Bob Johnson",
      date: "2024-07-03"
    },
    {
      text: "This is comment four.",
      avatar: "https://via.placeholder.com/50",
      fullname: "Alice Brown",
      date: "2024-07-04"
    },
    {
      text: "This is comment five.",
      avatar: "https://via.placeholder.com/50",
      fullname: "Mike Davis",
      date: "2024-07-05"
    },
    {
      text: "This is comment six.",
      avatar: "https://via.placeholder.com/50",
      fullname: "Emily Lee",
      date: "2024-07-06"
    },
    {
      text: "This is comment seven.",
      avatar: "https://via.placeholder.com/50",
      fullname: "David Kim",
      date: "2024-07-07"
    },
    {
      text: "This is comment eight.",
      avatar: "https://via.placeholder.com/50",
      fullname: "Sarah Taylor",
      date: "2024-07-08"
    },
    {
      text: "This is comment nine.",
      avatar: "https://via.placeholder.com/50",
      fullname: "Kevin White",
      date: "2024-07-09"
    },
    {
      text: "This is comment ten.",
      avatar: "https://via.placeholder.com/50",
      fullname: "Lisa Nguyen",
      date: "2024-07-10"
    }
  ];
  
  const comments = [
    {
      text: "Congratulations on your new life together!",
      avatar: "https://img.freepik.com/premium-photo/happy-woman_68067-541.jpg?w=1380",
      fullname: "John Doe",
      date: "2024-07-01"
    },
    {
      text: "Wishing you a lifetime of love and happiness!",
      avatar: "https://img.freepik.com/premium-photo/happy-woman_68067-541.jpg?w=1380",
      fullname: "Jane Smith",
      date: "2024-07-02"
    },
    {
      text: "May your love continue to grow stronger with each passing day!",
      avatar: "https://img.freepik.com/premium-photo/happy-woman_68067-541.jpg?w=1380",
      fullname: "Bob Johnson",
      date: "2024-07-03"
    },
    {
      text: "May your marriage be filled with laughter, adventure, and joy!",
      avatar: "https://img.freepik.com/premium-photo/happy-woman_68067-541.jpg?w=1380",
      fullname: "Alice Brown",
      date: "2024-07-04"
    },
    {
      text: "Wishing you a lifetime of happiness, love, and adventure together!",
      avatar: "https://img.freepik.com/premium-photo/happy-woman_68067-541.jpg?w=1380",
      fullname: "Mike Davis",
      date: "2024-07-05"
    },
    {
      text: "May your love continue to be the foundation of your life together!",
      avatar: "https://img.freepik.com/premium-photo/happy-woman_68067-541.jpg?w=1380",
      fullname: "Emily Lee",
      date: "2024-07-06"
    },
    {
      text: "Congratulations on your new life together!",
      avatar: "https://img.freepik.com/premium-photo/happy-woman_68067-541.jpg?w=1380",
      fullname: "David Kim",
      date: "2024-07-07"
    },
    {
      text: "Wishing you a lifetime of love, happiness, and adventure together!",
      avatar: "https://img.freepik.com/premium-photo/happy-woman_68067-541.jpg?w=1380",
      fullname: "Sarah Taylor",
      date: "2024-07-08"
    },
    {
      text: "May your love continue to grow stronger with each passing day!",
      avatar: "https://img.freepik.com/premium-photo/happy-woman_68067-541.jpg?w=1380",
      fullname: "Kevin White",
      date: "2024-07-09"
    },
    {
      text: "Congratulations on your new life together!",
      avatar: "https://img.freepik.com/premium-photo/happy-woman_68067-541.jpg?w=1380",
      fullname: "Lisa Nguyen",
      date: "2024-07-10"
    }
  ];
  
  
  

  const scrollContainerRef: any = useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  const targetDate = new Date('2024-08-17T00:00:00');  

  const renderer = ({ days, hours, minutes, seconds, completed }: any) => {
    if (completed) {
      // If countdown is completed, render this
      return <span>Event has started!</span>;
    } else {
      // If countdown is still ongoing, render the time remaining
      return (
        <div className="flex justify-center p-4 text-center" style={{
          fontFamily: 'Playwrite AU SA'
        }}>
          <div className="flex items-center flex-col justify-center p-2 m-2 text-[#152443] bg-gradient-to-r from-[#F6B859] to-[#DB9238] rounded-sm bg-opacity-30 font-DM rotate-2">
            <div className="text-xs font-extrabold" 
              style={{
                fontFamily: 'Playwrite AU SA'
              }}
            >
              {days}
            </div>
            <div className="text-[0.5rem] font-semibold mt-1" 
              style={{
                fontFamily: 'Playwrite AU SA'
              }}
            >
              Hari
            </div>
          </div>
          <div className="flex items-center flex-col justify-center p-2 m-2 text-[#152443] bg-black rounded-sm bg-opacity-30 font-DM -rotate-2 bg-gradient-to-r from-[#F6B859] to-[#DB9238]">
            <div className={`text-xs font-bold`}
              style={{
                fontFamily: 'Playwrite AU SA'
              }}
            >
                {hours} 
            </div>
            <div className='text-[0.5rem] font-semibold mt-1'
              style={{
                fontFamily: 'Playwrite AU SA'
              }}
            >
                Jam
            </div>
        </div>
          <div className="flex items-center flex-col justify-center p-2 m-2 text-[#152443] bg-black rounded-sm bg-opacity-30 font-DM rotate-2 bg-gradient-to-r from-[#F6B859] to-[#DB9238]">
            <div className={`text-xs font-bold`}
              style={{
                fontFamily: 'Playwrite AU SA'
              }}
            >
                {minutes} 
            </div>
            <div className='text-[0.5rem] font-semibold mt-1'
              style={{
                fontFamily: 'Playwrite AU SA'
              }}
            >
                Menit
            </div>
        </div>
          <div className="flex items-center flex-col justify-center p-2 m-2 text-[#152443] bg-black rounded-sm bg-opacity-30 font-DM -rotate-2 bg-gradient-to-r from-[#F6B859] to-[#DB9238]">
            <div className={`text-xs font-bold`}
              style={{
                fontFamily: 'Playwrite AU SA'
              }}
            >
            {seconds} 
            </div>
            <div className='text-[0.5rem] font-semibold mt-1'
              style={{
                fontFamily: 'Playwrite AU SA'
              }}
            >
                Detik
            </div>
          </div>
        </div>
      );
    }
};

    const handlePlay = () => {
        if (!musicPlaying) {
            audio.play();
            setMusicPlaying(true);
        } else {
            audio.pause();
            setMusicPlaying(false);
        }
    };

  return (
    <>

        <div className={`relative flex flex-col min-h-screen bg-[#152443] overflow-hidden`}
          // style={{
          //   backgroundImage: `url('https://asset.menica.pro/menicav4/bg-mandala-2.png')`,
          //   backgroundSize: 'unset',
          //   backgroundPosition: 'center center',
          //   backgroundRepeat: 'space'
          // }}
          style={{
            backgroundColor: currentColor
          }}
        >
            <div className="fixed inset-0 w-full h-screen bg-no-repeat bg-contain bg-center animate-spin-slow" style={{ backgroundImage: 'url("https://ik.imagekit.io/vtvggda66/mandala-navy1-big.png?updatedAt=1719847550283")' }}></div>
            <div className="relative z-10 w-full">
                <div className="h-screen-minus-40 sm:h-screen relative flex justify-start max-w-[451px] whitespace-pre-line mx-auto flex-col shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]"
                    style={{
                    backgroundImage: `url('https://asset.menica.pro/menicav4/bg-mandala-2.png')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundColor: (currentColor === '') ? '#152443' : currentColor
                    }}
                >

                    <audio
                            src="https://asset.menica.pro/Worthy-NemiMeyta.mp3"
                            ref={(audio) => setAudio(audio)}
                            onPlay={() => setMusicPlaying(true)}
                            onPause={() => setMusicPlaying(false)}
                    />

                    {  isPlaying ? <button
                            className="fixed bottom-1 left-1 text-white font-bold py-2 px-4 rounded w-20 h-20 sm:w-32 sm:h-32 z-50"
                            onClick={handlePlay}
                            style={{
                                zIndex: '9999'
                            }}
                        >
                            <img
                                src="https://asset.menica.pro/menicav4/music-mandala-icon.svg"
                                alt="Play Button"
                                className={`${musicPlaying ? 'animate-spin-medium' : ''}`}
                            />
                        </button> : <></>
                        
                    }

                    
                    
                    {/* Top Decoration Image */}
                    <div className="mx-auto mt-[-112px] w-1/2" data-aos="fade-in">
                    <img src="https://asset.menica.pro/menicav4/mandala-navy1-B.svg" alt="Top Decoration" className='animate-spin-slow'/>
                    </div>
                    
                    {/* Invitation Content */}
                    <div className="flex flex-col flex-grow justify-between w-[70%] mx-auto text-center">
                    {/* Invitation Title and Names */}
                    <div>
                        <div className="text-md text-white uppercase tracking-widest sm:mt-[30%] mt-[18%] font-light" style={{ fontFamily: 'Prata' }} data-aos="fade-up">
                        The Wedding Of
                        </div>
                        <div className="text-8xl font-normal sm:font-semibold mt-8 tracking-tight text-gradient" style={{ fontFamily: 'Alex Brush' }}  data-aos="fade-down">
                        Mei <br />
                        Roni
                        </div>
                        <div className="text-md text-white uppercase mt-4 tracking-widest font-light" style={{ fontFamily: 'Prata' }}  data-aos="fade-up">
                        17 . 08 . 2024
                        </div>
                        {/* Guest Name Section at the Bottom */}
                        <div className="font-normal mt-8" >
                        <div className="text-xs text-[#AE843C] tracking-widest" style={{ fontFamily: 'Montserrat' }}  data-aos="fade-in">
                            Kepada Yth :
                        </div>
                        <div className="text-white font-light tracking-tighter text-xl mt-5" style={{ fontFamily: 'Prata' }}  data-aos="fade-in">
                            Nama Tamu
                        </div>
                        <div className="mt-4 mx-auto" data-aos="fade-down">
                            {
                            isPlaying ? <></> : (
                                <button
                                onClick={handlePlayPause}
                                className="bg-transparent text-black px-6 py-3 rounded-full backdrop-filter backdrop-blur-md bg-opacity-20 hover:bg-opacity-40 transition-all duration-500 font-bold"
                                style={{
                                    fontFamily: 'Prata',
                                    backgroundImage: 'linear-gradient(180deg, #F9BD5D 0%, #D2852D 100%)',
                                    backgroundClip: 'padding-box', // Ensures the gradient covers the padding area
                                }}
                                >
                                {isPlaying ? 'Pause' : 'Open Invitation'}
                                </button>
                            )
                            }
                        </div>
                        </div>
                    </div>
                    
                    
                    </div>
                    
                    {/* Bottom Decoration Image */}
                    <div className="mx-auto mb-[-112px] w-1/2" data-aos="fade-in">
                    <img src="https://asset.menica.pro/menicav4/mandala-navy1-B.svg" alt="Bottom Decoration" className="rotate-180 animate-spin-slow" />
                    </div>
                </div>

                <div className="h-auto sm:min-h-screen sm:h-auto relative flex justify-start max-w-[451px] whitespace-pre-line mx-auto flex-col shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]"
                    style={{
                    backgroundImage: `url('https://asset.menica.pro/menicav4/bg-mandala-2.png')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundColor: (currentColor === '') ? '#152443' : currentColor
                    }}
                >
                    {/* Top Decoration Image */}
                    <div className="mx-auto mt-[-112px] w-1/2">
                    <img src="https://asset.menica.pro/menicav4/mandala-navy1-B.svg" alt="Top Decoration" className='animate-spin-slow'/>
                    </div>
                    
                    {/* Invitation Content */}
                    <div className="w-[75%] z-50 text-center mx-auto my-10" ref={section2Ref}>
                        {/* <img src={'https://asset.menica.pro/menicav4/galeri-mandala-icon.svg'} className='mx-auto' alt='undangan digital menica'/> */}
                        <div className="text-3xl sm:text-5xl font-semibold mt-4 tracking-tight text-gradient" style={{ fontFamily: 'Alex Brush' }}  data-aos="fade-down">
                            Opening
                        </div>

                        <img src={'https://menicapro.s3.ap-southeast-1.amazonaws.com/mandala-navy1-divider.svg'} className='mx-auto mt-1' alt='undangan digital menica'/>
                        {/* <div className="flex items-center mt-7 flex-row justify-between">
                        <img 
                        src="https://ik.imagekit.io/vtvggda66/menicaid6_tKdAiCowm.png" 
                        alt="Nemi Photo" 
                        className="w-32 h-32 border-4 border-white shadow-lg" 
                        style={{
                            objectFit: 'cover',
                            transform: 'rotate(6deg)'
                        }} 
                        data-aos="fade-left"
                        />
                        
                        <div className='mx-3' data-aos="fade-in">
                        <GiOppositeHearts className='text-red-700' size={25} />
                        </div>

                        <img 
                        src="https://ik.imagekit.io/vtvggda66/menicaid6_MLweMltp-.png" 
                        alt="Meyta Photo" 
                        className="w-32 h-32 border-4 border-white shadow-lg"  
                        style={{
                            objectFit: 'cover',
                            transform: 'rotate(-6deg)'
                        }} 
                        data-aos="fade-right"
                        />
                    </div> */}


                        <div className="flex justify-around items-center mt-8 mb-32 flex-col">    
                            <div className="text-center flex flex-col">
                                <div className="flex flex-col">

                                <div className="text-sm text-[#fff] mt-2 ml-4 tracking-normal italic" style={{ fontFamily: 'Prata' }}  data-aos="fade-down">
                                    TUHAN Allah berfirman: "Tidak baik, kalau manusia itu seorang diri saja. Aku akan menjadikan penolong baginya, yang sepadan dengan dia."
                                </div>

                                <div className="text-xl sm:text-2xl text-gradient mt-3 ml-4" style={{ fontFamily: 'Alex Brush' }} data-aos="fade-in">
                                    Kejadian 2:18
                                </div>
                                
                                </div>

                                <img src={'https://asset.menica.pro/menicav4/galeri-mandala-icon.svg'} className='mx-auto my-6' alt='undangan digital menica'/>

                                <div className="flex flex-col">

                                <div className="text-sm text-[#fff] mt-2 ml-4 tracking-normal italics" style={{ fontFamily: 'Prata' }}  data-aos="fade-down">
                                Inilah perintah-Ku, yaitu supaya kamu saling mengasihi, seperti Aku telah mengasihi kamu.
                                </div>

                                <div className="text-xl sm:text-2xl text-gradient mt-3 ml-4" style={{ fontFamily: 'Alex Brush' }} data-aos="fade-in">
                                    Yohanes 15:12
                                </div>
                                
                                </div>
                                
                            </div>
                        </div>

                    </div>
                </div>
                
                <div className="h-auto sm:min-h-screen sm:h-auto relative flex justify-start max-w-[451px] whitespace-pre-line mx-auto flex-col bg-[#152443] shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]"
                    style={{
                    backgroundImage: `url('https://asset.menica.pro/menicav4/bg-mandala-2.png')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    }}
                >
                    {/* Top Decoration Image */}
                    <div className="mx-auto mt-[-112px] w-1/2">
                    <img src="https://asset.menica.pro/menicav4/mandala-navy1-B.svg" alt="Top Decoration" className='animate-spin-slow'/>
                    </div>
                    
                    {/* Invitation Content */}
                    <div className="w-[75%] z-50 text-center mx-auto my-10">
                        <img src={'https://asset.menica.pro/menicav4/galeri-mandala-icon.svg'} className='mx-auto' alt='undangan digital menica'/>
                        <div className="text-3xl sm:text-5xl font-semibold mt-4 tracking-tight text-gradient" style={{ fontFamily: 'Alex Brush' }}  data-aos="fade-down">
                            Mempelai
                        </div>
                        <img src={'https://menicapro.s3.ap-southeast-1.amazonaws.com/mandala-navy1-divider.svg'} className='mx-auto mt-1' alt='undangan digital menica'/>
                        <div className="flex items-center mt-7 flex-row justify-between">
                        <img 
                        src="https://ik.imagekit.io/vtvggda66/menicaid6_tKdAiCowm.png" 
                        alt="Nemi Photo" 
                        className="w-32 h-32 border-4 border-white shadow-lg" 
                        style={{
                            objectFit: 'cover',
                            transform: 'rotate(6deg)'
                        }} 
                        data-aos="fade-left"
                        />
                        
                        <div className='mx-3' data-aos="fade-in">
                        <GiOppositeHearts className='text-red-700' size={25} />
                        </div>

                        <img 
                        src="https://ik.imagekit.io/vtvggda66/menicaid6_MLweMltp-.png" 
                        alt="Meyta Photo" 
                        className="w-32 h-32 border-4 border-white shadow-lg"  
                        style={{
                            objectFit: 'cover',
                            transform: 'rotate(-6deg)'
                        }} 
                        data-aos="fade-right"
                        />
                    </div>


                        <div className="flex justify-around items-center mt-8 mb-32 flex-col">    
                            <div className="text-center flex flex-row">
                                <div className="flex flex-col">

                                <div className="text-3xl sm:text-4xl text-gradient mt-3 ml-4" style={{ fontFamily: 'Alex Brush' }} data-aos="fade-in">
                                    Mahanaim Purba, S.Sn
                                </div>
                                <div className="text-xs text-[#fff] mt-2 ml-4 tracking-normal" style={{ fontFamily: 'Prata' }}  data-aos="fade-down">
                                    Anak pertama dari bapak Pdt. Demu Purba & ibu Cynthia Grace, S.Pd
                                </div>
                                </div>
                                
                            </div>

                            <div className='text-gradient mt-5 font-semibold text-xl'  style={{ fontFamily: 'Alex Brush' }}>
                            &
                            </div>

                            <div className="text-center flex flex-row">
                                <div className="flex flex-col">

                                <div className="text-3xl sm:text-4xl text-gradient mt-3 ml-4" style={{ fontFamily: 'Alex Brush' }} data-aos="fade-in">
                                    dr. Agnes Meyta Arpinda Tampubolon
                                </div>
                                <div className="text-xs text-[#fff] mt-2 ml-4" style={{ fontFamily: 'Prata' }} data-aos="fade-down">
                                    Anak kedua dari bapak Arnold Tampubolon dan Hevrida br Barus
                                </div>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="sm:min-h-screen sm:h-auto relative flex justify-start max-w-[451px] whitespace-pre-line mx-auto flex-col bg-[#152443] shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]"
                    style={{
                    backgroundImage: `url('https://asset.menica.pro/menicav4/bg-mandala-2.png')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    }}
                >
                    {/* Top Decoration Image */}
                    <div className="mx-auto mt-[-112px] w-1/2">
                    <img src="https://asset.menica.pro/menicav4/mandala-navy1-B.svg" alt="Top Decoration" className='animate-spin-slow'/>
                    </div>
                    
                    {/* Invitation Content */}
                    <div className="w-[70%] z-50 text-center mx-auto mt-10 sm:mb-16 mb-32" ref={section3Ref}>
                        <img src={'https://asset.menica.pro/menicav4/galeri-mandala-icon.svg'} className='mx-auto' alt='undangan digital menica'/>
                        <div className="text-3xl sm:text-5xl font-semibold mt-4 tracking-tight text-gradient" style={{ fontFamily: 'Alex Brush' }}  data-aos="fade-down">
                            Galeri
                        </div>
                        <img src={'https://menicapro.s3.ap-southeast-1.amazonaws.com/mandala-navy1-divider.svg'} className='mx-auto mt-1' alt='undangan digital menica'/>
                        <div className="grid grid-flow-col grid-rows-2 grid-cols-3 gap-4 mt-8">
                        {/* addition */}
                        <div className="transform scale-150 -rotate-6 translate-y-10 mt-[80px]">
                            <img 
                            src="https://ik.imagekit.io/vtvggda66/menicaid6_kKPg4qjo8.png?updatedAt=1719819011595" 
                            alt="" 
                            loading="lazy" 
                            className="border-4 border-white shadow-lg"
                            data-aos="fade-left"
                            />
                        </div>
                        <div className="col-start-3 transform scale-150 rotate-6 translate-x-2 translate-y-15 z-30">
                            <img 
                            src="https://ik.imagekit.io/vtvggda66/menicaid6_fCBOfyS-Y.png?updatedAt=1719819007743" 
                            alt="" 
                            loading="lazy" 
                            className="border-4 border-white shadow-lg"
                            data-aos="fade-right"
                            />
                        </div>
                        <div className="transform scale-150 translate-y-11" >
                            <img 
                            src="https://ik.imagekit.io/vtvggda66/menicaid6_KDeRGtWBR.png?updatedAt=1719819004269" 
                            alt="" 
                            loading="lazy" 
                            className="border-4 border-white shadow-lg"
                            data-aos="fade-down"
                            />
                        </div>
                        <div className="transform translate-y-24 scale-150" >
                            <img 
                            src="https://ik.imagekit.io/vtvggda66/menicaid6_6k7fNNyhm.png?updatedAt=1719819000408" 
                            alt="" 
                            loading="lazy" 
                            className="border-4 border-white shadow-lg"
                            data-aos="fade-left"
                            />
                        </div>
                        <div className="row-start-1 col-start-2 col-span-2 transform translate-x-5 translate-y-4 scale-100" >
                            <img 
                            src="https://ik.imagekit.io/vtvggda66/menicaid6_ogOCt64bZ.png?updatedAt=1719818997426" 
                            alt="" 
                            loading="lazy" 
                            className="border-4 border-white shadow-lg"
                            data-aos="fade-right"
                            />
                        </div>
                        
                        {/* addition */}
                        {/* <div>
                            <img 
                            src="https://ik.imagekit.io/vtvggda66/WhatsApp%20Image%202024-07-02%20at%204.35.20%20PM.jpeg?updatedAt=1719924074694" 
                            alt="" 
                            loading="lazy" 
                            className="border-4 border-white shadow-lg"
                            data-aos="fade-left"
                            style={{
                                width: '20%'
                            }}
                            />
                        </div>
                        <div>
                            <img 
                            src="https://ik.imagekit.io/vtvggda66/WhatsApp%20Image%202024-07-02%20at%204.35.17%20PM.jpeg?updatedAt=1719924074279" 
                            alt="" 
                            loading="lazy" 
                            className="border-4 border-white shadow-lg"
                            data-aos="fade-down"
                            style={{
                                width: '20%'
                            }}
                            />
                        </div> */}

                        </div>




                    </div>
                </div>
                <div className="sm:min-h-screen sm:h-auto relative flex justify-start max-w-[451px] whitespace-pre-line mx-auto flex-col bg-[#152443] shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]"
                    style={{
                    backgroundImage: `url('https://asset.menica.pro/menicav4/bg-mandala-2.png')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    }}
                
                >
                    {/* Top Decoration Image */}
                    <div className="mx-auto mt-[-112px] w-1/2">
                    <img src="https://asset.menica.pro/menicav4/mandala-navy1-B.svg" alt="Top Decoration" className='animate-spin-slow'/>
                    </div>
                    
                    {/* Invitation Content */}
                    <div className="w-[70%] z-50 text-center mx-auto my-10">
                        <img src={'https://asset.menica.pro/menicav4/galeri-mandala-icon.svg'} className='mx-auto' alt='undangan digital menica'/>
                        <div className="text-3xl sm:text-5xl font-semibold mt-4 tracking-tight text-gradient" style={{ fontFamily: 'Alex Brush' }}  data-aos="fade-down">
                            Acara
                        </div>
                        <img src={'https://menicapro.s3.ap-southeast-1.amazonaws.com/mandala-navy1-divider.svg'} className='mx-auto mt-1' alt='undangan digital menica'/>

                        <div className="flex justify-around items-center mt-8 mb-32 flex-col">    
                        <div className="relative text-center flex flex-row w-full" data-aos='fade-down'>
                                <div className="absolute top-1 left-1 z-40 w-[20%]">
                                    <img src="https://asset.menica.pro/menicav4/corner-mandala.svg" className="w-[100%] h-auto object-contain rotate-180" />
                                </div>
                                <div className="absolute top-1 right-1 z-40 w-[20%]">
                                    <img src="https://asset.menica.pro/menicav4/corner-mandala.svg" className="w-[100%] h-auto object-contain -rotate-90" />
                                </div>
                                <div className="absolute bottom-1 left-1 z-40 w-[20%]">
                                    <img src="https://asset.menica.pro/menicav4/corner-mandala.svg" className="w-[100%] h-auto object-contain rotate-90" />
                                </div>
                                <div className="absolute bottom-1 right-1  z-40 w-[20%]">
                                    <img src="https://asset.menica.pro/menicav4/corner-mandala.svg" className="w-[100%] h-auto object-contain" />
                                </div>
                            <div className="relative flex flex-col shadow-2xl rounded-lg p-8 bg-[#202f51] w-full">
                                

                                <div className="text-3xl sm:text-4xl text-gradient mt-3" style={{ fontFamily: 'Alex Brush' }}>
                                Holy Matrimony
                                </div>
                                <div className="flex flex-col items-center justify-center">
                                <div className="flex-grow text-base text-[#fff] mt-2" style={{ fontFamily: 'Prata' }}>
                                    Agustus
                                </div>
                                <div className="flex-grow text-6xl text-[#fff] mt-2 text-gradient font-extrabold" style={{ fontFamily: 'Prata' }}>
                                    17
                                </div>
                                <div className="flex-grow text-base text-[#fff] mt-2" style={{ fontFamily: 'Prata' }}>
                                    2024
                                </div>
                                </div>

                                <div className="flex-grow text-sm text-[#fff] mt-2 text-gradient font-extrabold" style={{ fontFamily: 'Prata' }}>
                                    Pukul 13.00 - 14:30 WIB
                                </div>
                                <div className="flex-grow text-xs text-[#fff] mt-2 text-gradient font-extrabold" style={{ fontFamily: 'Prata' }}>
                                    *Hanya Keluarga
                                </div>

                                
                                
                                <div className="text-base text-[#fff] mt-2 tracking-normal" style={{ fontFamily: 'Prata' }}>
                                Ibis Style Hotel Gajah Mada

                                </div>
                                <div className="bg-gradient-to-r from-[#F6B859] to-[#DB9238] p-2 rounded-md my-3 text-[#202f51] cursor-pointer font-semibold" style={{ fontFamily: 'Prata' }}>
                                    Google Maps
                                </div>

                            </div>
                            
                        </div>


                            <div className='text-gradient my-5 font-semibold text-xl'  style={{ fontFamily: 'Alex Brush' }}  data-aos='fade-up'>
                            &
                            </div>

                            <div className="relative text-center flex flex-row w-full"  data-aos='fade-down'>
                                <div className="absolute top-1 left-1 z-40 w-[20%]">
                                    <img src="https://asset.menica.pro/menicav4/corner-mandala.svg" className="w-[100%] h-auto object-contain rotate-180" />
                                </div>
                                <div className="absolute top-1 right-1 z-40 w-[20%]">
                                    <img src="https://asset.menica.pro/menicav4/corner-mandala.svg" className="w-[100%] h-auto object-contain -rotate-90" />
                                </div>
                                <div className="absolute bottom-1 left-1 z-40 w-[20%]">
                                    <img src="https://asset.menica.pro/menicav4/corner-mandala.svg" className="w-[100%] h-auto object-contain rotate-90" />
                                </div>
                                <div className="absolute bottom-1 right-1  z-40 w-[20%]">
                                    <img src="https://asset.menica.pro/menicav4/corner-mandala.svg" className="w-[100%] h-auto object-contain" />
                                </div>
                            <div className="relative flex flex-col shadow-2xl rounded-lg p-8 bg-[#202f51] w-full">
                                

                                <div className="text-3xl sm:text-4xl text-gradient mt-3" style={{ fontFamily: 'Alex Brush' }}>
                                    Wedding Reception
                                </div>
                                <div className="flex flex-col items-center justify-center">
                                <div className="flex-grow text-base text-[#fff] mt-2" style={{ fontFamily: 'Prata' }}>
                                    Agustus
                                </div>
                                <div className="flex-grow text-6xl text-[#fff] mt-2 text-gradient font-extrabold" style={{ fontFamily: 'Prata' }}>
                                    17
                                </div>
                                <div className="flex-grow text-base text-[#fff] mt-2" style={{ fontFamily: 'Prata' }}>
                                    2024
                                </div>
                                </div>



                                <div className="flex-grow text-sm text-[#fff] mt-2 text-gradient font-extrabold" style={{ fontFamily: 'Prata' }}>
                                    Pukul 19.00 - Selesai
                                </div>
                                
                                <div className="text-base text-[#fff] mt-2 tracking-normal" style={{ fontFamily: 'Prata' }}>
                                
                                Jagat Office Building

                                </div>

                                


                                <div className="bg-gradient-to-r from-[#F6B859] to-[#DB9238] p-2 rounded-md my-3 text-[#202f51] cursor-pointer font-semibold" style={{ fontFamily: 'Prata' }}>
                                    Google Maps
                                </div>

                            </div>
                            
                        </div>
                        </div>

                    

                    </div>
                </div>
                <div className="sm:min-h-screen sm:h-auto relative flex justify-start max-w-[451px] whitespace-pre-line mx-auto flex-col bg-[#152443] shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]"
                    style={{
                    backgroundImage: `url('https://asset.menica.pro/menicav4/bg-mandala-2.png')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    }}
                >
                    {/* Top Decoration Image */}
                    <div className="mx-auto mt-[-112px] w-1/2">
                    <img src="https://asset.menica.pro/menicav4/mandala-navy1-B.svg" alt="Top Decoration" className='animate-spin-slow'/>
                    </div>
                    
                    {/* Invitation Content */}
                    <div className="w-[70%] z-50 text-center mx-auto my-10">
                    <img src={'https://asset.menica.pro/weddinggift-mandala-icon.svg'} className='mx-auto' alt='undangan digital menica'/>
                        <div className="text-3xl sm:text-5xl font-semibold mt-4 tracking-tight text-gradient" style={{ fontFamily: 'Alex Brush' }}  data-aos="fade-down">
                            Hadiah
                        </div>
                        <img src={'https://menicapro.s3.ap-southeast-1.amazonaws.com/mandala-navy1-divider.svg'} className='mx-auto mt-1' alt='undangan digital menica'/>

                        <div className="flex justify-around items-center my-8 flex-col font-semibold gap-y-4" style={{ fontFamily: 'Prata' }}>  

                            <div className="relative text-center flex flex-row w-full"  data-aos='fade-down'>
                                    <div className="absolute top-1 left-1 z-40 w-[20%]">
                                        <img src="https://asset.menica.pro/menicav4/corner-mandala.svg" className="w-[100%] h-auto object-contain rotate-180" />
                                    </div>
                                    <div className="absolute top-1 right-1 z-40 w-[20%]">
                                        <img src="https://asset.menica.pro/menicav4/corner-mandala.svg" className="w-[100%] h-auto object-contain -rotate-90" />
                                    </div>
                                    <div className="absolute bottom-1 left-1 z-40 w-[20%]">
                                        <img src="https://asset.menica.pro/menicav4/corner-mandala.svg" className="w-[100%] h-auto object-contain rotate-90" />
                                    </div>
                                    <div className="absolute bottom-1 right-1  z-40 w-[20%]">
                                        <img src="https://asset.menica.pro/menicav4/corner-mandala.svg" className="w-[100%] h-auto object-contain" />
                                    </div>
                                <div className="relative flex flex-col shadow-2xl rounded-lg p-8 bg-[#202f51] w-full">
                                    

                                    <div className="flex-grow text-xl text-[#fff] mt-2 text-gradient font-extrabold" style={{ fontFamily: 'Prata' }}>
                                    Agnes Meyta
                                    </div>

                                    <div className="text-lg text-[#fff] mt-2 tracking-normal" style={{ fontFamily: 'Prata' }}>
                                    Bank Mandiri
                                    </div>
                                    
                                    <div className="text-lg text-[#fff] mt-2 tracking-normal" style={{ fontFamily: 'Prata' }}>
                                    1240010709534
                                    </div>
                                    <div className="flex flex-row items-center justify-center text-xs bg-gradient-to-r from-[#F6B859] to-[#DB9238] p-2 rounded-md my-3 text-[#202f51] cursor-pointer font-semibold" style={{ fontFamily: 'Prata' }}>
                                        <GrCopy className="mr-1" size={14}/> Copy
                                    </div>

                                </div>
                                
                            </div>

                            <div className="relative text-center flex flex-row w-full"  data-aos='fade-down'>
                                    <div className="absolute top-1 left-1 z-40 w-[20%]">
                                        <img src="https://asset.menica.pro/menicav4/corner-mandala.svg" className="w-[100%] h-auto object-contain rotate-180" />
                                    </div>
                                    <div className="absolute top-1 right-1 z-40 w-[20%]">
                                        <img src="https://asset.menica.pro/menicav4/corner-mandala.svg" className="w-[100%] h-auto object-contain -rotate-90" />
                                    </div>
                                    <div className="absolute bottom-1 left-1 z-40 w-[20%]">
                                        <img src="https://asset.menica.pro/menicav4/corner-mandala.svg" className="w-[100%] h-auto object-contain rotate-90" />
                                    </div>
                                    <div className="absolute bottom-1 right-1  z-40 w-[20%]">
                                        <img src="https://asset.menica.pro/menicav4/corner-mandala.svg" className="w-[100%] h-auto object-contain" />
                                    </div>
                                <div className="relative flex flex-col shadow-2xl rounded-lg p-8 bg-[#202f51] w-full">
                                    

                                    <div className="flex-grow text-xl text-[#fff] mt-2 text-gradient font-extrabold" style={{ fontFamily: 'Prata' }}>
                                    Mahanaim Purba
                                    </div>

                                    <div className="text-lg text-[#fff] mt-2 tracking-normal" style={{ fontFamily: 'Prata' }}>
                                    Bank BCA
                                    </div>
                                    
                                    <div className="text-lg text-[#fff] mt-2 tracking-normal" style={{ fontFamily: 'Prata' }}>
                                    0948033235
                                    </div>
                                    <div className="flex flex-row items-center justify-center text-xs bg-gradient-to-r from-[#F6B859] to-[#DB9238] p-2 rounded-md my-3 text-[#202f51] cursor-pointer font-semibold" style={{ fontFamily: 'Prata' }}>
                                        <GrCopy className="mr-1" size={14}/> Copy
                                    </div>

                                </div>
                                
                            </div>
                            
                        </div>

                        

                        



                    </div>
                    {/* <div className="text-3xl font-semibold my-10 tracking-tight text-gradient mx-auto" style={{ fontFamily: 'Alex Brush' }}  data-aos="fade-down">
                            Katalog Kado
                    </div> */}
                    {/* <div className="min-h-[400px] h-auto w-full pb-32">
                    <div ref={scrollContainerRef} className="flex overflow-x-auto space-x-4 p-4 bg-transparent w-full">
                        {dataKado.map((comment, index) => (
                        <div 
                            key={index} 
                            className={`min-w-[200px] p-2 bg-[#202f51] rounded-md shadow-lg font-bold mx-2 h-auto ${getRandomRotation()}`}
                        >
                            <img 
                            src={comment.thumbnail} 
                            alt={`Avatar ${index + 1}`} 
                            className="w-full h-auto rounded-sm"
                            />

                            <div className="my-2 text-[0.8rem] text-white"
                            style={{
                                fontFamily: 'Prata'
                            }}
                            >
                            {comment.title}
                            </div>

                            <div className="text-[0.8rem] mt-1 text-white my-1 flex-1"
                            style={{
                                fontFamily: 'Prata'
                            }}
                            >
                            {comment.price_text}
                            </div>

                            <div className="text-xs text-center bg-gradient-to-r from-[#F6B859] to-[#DB9238] p-2 rounded-md my-3 text-[#202f51] cursor-pointer font-semibold" style={{ fontFamily: 'Prata' }}>
                                Detail
                            </div>

                        </div>
                        ))}
                    </div>


                    </div> */}
                </div>
                <div className="h-screen-minus-40 sm:min-h-screen sm:h-auto relative flex justify-start max-w-[451px] whitespace-pre-line mx-auto flex-col bg-[#152443] shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]"
                    style={{
                    backgroundImage: `url('https://asset.menica.pro/menicav4/bg-mandala-2.png')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    }}  
                >
                    {/* Top Decoration Image */}
                    <div className="mx-auto mt-[-112px] w-1/2">
                    <img src="https://asset.menica.pro/menicav4/mandala-navy1-B.svg" alt="Top Decoration" className='animate-spin-slow'/>
                    </div>
                    
                    {/* Invitation Content */}
                        <div className="w-[90%] z-50 text-center mx-auto my-10">
                        <img src={'https://asset.menica.pro/menicav4/guestbook-mandala-icon.svg'} className='mx-auto' alt='undangan digital menica'/>
                        <div className="text-3xl sm:text-5xlfont-semibold mt-4 tracking-tight text-gradient" style={{ fontFamily: 'Alex Brush' }}  data-aos="fade-down">
                            Buku Tamu
                        </div>
                        <img src={'https://menicapro.s3.ap-southeast-1.amazonaws.com/mandala-navy1-divider.svg'} className='mx-auto mt-1' alt='undangan digital menica'/>

                    <div className="flex justify-center items-center mt-7">
                    
                    <div ref={scrollContainerRef} className="flex overflow-x-auto space-x-4 p-4 bg-transparent w-full">
                        {comments.map((comment, index) => (
                        <div 
                            key={index} 
                            className={`relative min-w-[200px] p-4 bg-white rounded-lg shadow-lg font-bold ${getRandomRotation()}`}
                        >
                            <div className="flex flex-row justify-between">
                            <img 
                            src={comment.avatar} 
                            alt={`Avatar ${index + 1}`} 
                            className="w-8 h-8 rounded-full"
                            />

                            <div className="flex-flex-col">
                            <p className="text-[1rem] text-slate-500 mt-2"
                            style={{
                                fontFamily: 'Prata'
                            }}
                            >
                            {comment.fullname}
                            </p>
                            <p className="text-[0.4rem] text-gray-500 mt-2"
                            style={{
                                fontFamily: 'Playwrite AU SA'
                            }}
                            >
                            {comment.date}
                            </p>

                            </div>
                            

                            </div>
                            
                            <p className="mt-4 tracking-wider text-xs text-[#152443]"
                            style={{
                                fontFamily: 'Playwrite AU SA'
                            }}
                            >
                            {comment.text}
                            </p>
                        </div>
                        ))}
                    </div>


                    </div>
                    <div className="flex flex-row justify-center w-full items-center mx-auto my-5">
                        <button onClick={scrollLeft} className="p-2 bg-gray-300 rounded-md shadow-lg mx-2">
                        <IoIosArrowForward className='rotate-180'/>
                        </button>
                        <button onClick={scrollRight} className="p-2 bg-gray-300 rounded-md shadow-lg mx-2">
                            <IoIosArrowForward/>
                        </button>
                    </div>
                    <div className="flex flex-row items-center justify-center bg-gradient-to-r from-[#F6B859] to-[#DB9238] p-2 rounded-md my-3 text-[#202f51] cursor-pointer font-semibold mt-3" style={{ fontFamily: 'Prata' }}>
                        <PiPencilLineDuotone size={20} className="mr-1"/> Kirim Ucapan 
                    </div>
                    </div>
                </div>
                <div className="h-screen-minus-40 sm:min-h-screen sm:h-auto relative flex justify-start max-w-[451px] whitespace-pre-line mx-auto flex-col bg-[#152443] shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]"
                    style={{
                    backgroundImage: `url('https://asset.menica.pro/menicav4/bg-mandala-2.png')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    }}
                >
                    {/* Top Decoration Image */}
                    <div className="mx-auto mt-[-112px] w-1/2">
                    <img src="https://asset.menica.pro/menicav4/mandala-navy1-B.svg" alt="Top Decoration" className='animate-spin-slow'/>
                    </div>
                    
                    {/* Invitation Content */}
                    <div className="w-[70%] z-50 text-center mx-auto my-10">
                    <img src={'https://asset.menica.pro/menicav4/galeri-mandala-icon.svg'} className='mx-auto' alt='undangan digital menica'/>
                        <div className="text-3xl sm:text-5xl font-semibold mt-4 tracking-tight text-gradient" style={{ fontFamily: 'Alex Brush' }}  data-aos="fade-down">
                            Save The Date
                        </div>
                        <img src={'https://menicapro.s3.ap-southeast-1.amazonaws.com/mandala-navy1-divider.svg'} className='mx-auto mt-1' alt='undangan digital menica'/>

                        <Countdown date={targetDate} renderer={renderer} />

                        <div className="flex justify-around items-center mt-8 flex-col">    

                            {/* <img 
                            src="https://ik.imagekit.io/vtvggda66/Elegant%20Photo%20Collage%20White%20Save%20The%20Date%20Wedding%20Invitation.png?updatedAt=1719858590321" 
                            alt="Rounded Shadow Image" 
                            className="rounded-lg shadow-lg rotate-6"
                            /> */}

                        <div className="gradient-border rounded-lg shadow-lg" >
                        <img 
                            src="https://ik.imagekit.io/vtvggda66/Elegant%20Photo%20Collage%20White%20Save%20The%20Date%20Wedding%20Invitation.png?updatedAt=1719858590321" 
                            alt="Rounded Shadow Image" 
                            className="rounded-lg shadow-lg"
                            data-aos="fade-down"
                            style={{
                            transform: 'rotate(6deg)'
                            }}
                        />
                        </div>
                            
                            
                        </div>

                        



                    </div>
                </div>
                <div className="h-auto relative flex justify-start max-w-[451px] whitespace-pre-line mx-auto flex-col bg-[#152443] shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]"
                    style={{
                    backgroundImage: `url('https://asset.menica.pro/menicav4/bg-mandala-2.png')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    }}
                >
                    {/* Top Decoration Image */}
                    <div className="mx-auto mt-[-112px] w-1/2">
                    <img src="https://asset.menica.pro/menicav4/mandala-navy1-B.svg" alt="Top Decoration" className='animate-spin-slow'/>
                    </div>
                    
                    {/* Invitation Content */}
                    <div className="w-[70%] z-50 text-center mx-auto my-10">
                        <img src={'https://asset.menica.pro/menicav4/galeri-mandala-icon.svg'} className='mx-auto' alt='undangan digital menica'/>
                        <div className="text-base font-semibold mt-4 tracking-tight text-gradient" style={{ fontFamily: 'Prata' }}  data-aos="fade-down">
                            Luxury Wedding Invitation
                        </div>
                        <img src={'https://menicapro.s3.ap-southeast-1.amazonaws.com/mandala-navy1-divider.svg'} className='mx-auto mt-1' alt='undangan digital menica'/>

                        <div className="flex justify-around items-center mt-8 flex-col">    

                            {/* <img 
                            src="https://ik.imagekit.io/vtvggda66/Elegant%20Photo%20Collage%20White%20Save%20The%20Date%20Wedding%20Invitation.png?updatedAt=1719858590321" 
                            alt="Rounded Shadow Image" 
                            className="rounded-lg shadow-lg rotate-6"
                            /> */}

                        <div>
                        <img 
                            src="https://ik.imagekit.io/vtvggda66/test-upload_FweOOgNyL.png" 
                            alt="Rounded Shadow Image"
                            className='mx-auto'
                            style={{
                            transform: 'rotate(6deg)',
                            width: '60%'
                            }}
                        />
                        </div>
                        <div className="text-base font-semibold mt-4 tracking-tight text-gradient cursor-pointer" onClick={()=>{ alert('...') }} style={{ fontFamily: 'Prata' }}>
                            https://menica.id
                        </div>
                            
                            
                        </div>

                        



                    </div>
                </div>

            </div>
        </div>
    </>
  );
};

export default Cover;
