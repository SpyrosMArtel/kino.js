export const mockAPI = {
    findMovie(keyword) {
        return new Promise((resolve) => {
            resolve({data:{
                "page": 1,
                "results": [
                    {
                        "poster_path": "/pMdTc3kYCD1869UX6cdYUT8Xe49.jpg",
                        "adult": false,
                        "overview": "Feature-length documentary about the rise of Marvel Studios and their films leading up to, and including, The Avengers.",
                        "release_date": "2012-09-25",
                        "genre_ids": [
                            99
                        ],
                        "id": 161097,
                        "original_title": "Marvel Studios: Building a Cinematic Universe",
                        "original_language": "en",
                        "title": "Marvel Studios: Building a Cinematic Universe",
                        "backdrop_path": "/yeKT2gNFxHGbTT3Htj5PE9IerGJ.jpg",
                        "popularity": 1.136598,
                        "vote_count": 4,
                        "video": false,
                        "vote_average": 3.88
                    }
                ],
                "total_results": 1,
                "total_pages": 1
            }});
        });
    },

    getVideos(id) {
        return new Promise((resolve) => {
            resolve({ data: {
                    "adult": false,
                    "backdrop_path": "/kQOLgJGvFjQ7EwGfaPkW9dlGFXJ.jpg",
                    "belongs_to_collection": {
                        "id": 14563,
                        "name": "The Ring Collection",
                        "poster_path": "/500xj7l72BojMZ3tNBJY46tg5YJ.jpg",
                        "backdrop_path": "/jXlFymc442CEMB5h3d62GeJefnW.jpg"
                    },
                    "budget": 48000000,
                    "genres": [
                        {
                            "id": 27,
                            "name": "Horror"
                        },
                        {
                            "id": 9648,
                            "name": "Mystery"
                        }
                    ],
                    "homepage": null,
                    "id": 565,
                    "imdb_id": "tt0298130",
                    "original_language": "en",
                    "original_title": "The Ring",
                    "overview": "It sounded like just another urban legend: A videotape filled with nightmarish images, leading to a phone call foretelling the viewer's death in exactly seven days. As a newspaper reporter, Rachel Keller was naturally skeptical of the story, until four teenagers all met with mysterious deaths exactly one week after watching just such a tape. Allowing her investigative curiosity to get the better of her, Rachel tracks down the video... and watches it. Now she has just seven days to unravel the mystery of the Ring.",
                    "popularity": 10.761,
                    "poster_path": "/zHJFdhqEXZJxG653oZvOM3PmNON.jpg",
                    "production_companies": [
                        {
                            "id": 6363,
                            "logo_path": null,
                            "name": "BenderSpink",
                            "origin_country": ""
                        },
                        {
                            "id": 49325,
                            "logo_path": null,
                            "name": "Parkes+MacDonald Image Nation",
                            "origin_country": ""
                        },
                        {
                            "id": 7,
                            "logo_path": "/9YHAhaqpFKDq66Alz7HrYd1iM6G.png",
                            "name": "DreamWorks",
                            "origin_country": "US"
                        }
                    ],
                    "production_countries": [
                        {
                            "iso_3166_1": "JP",
                            "name": "Japan"
                        },
                        {
                            "iso_3166_1": "US",
                            "name": "United States of America"
                        }
                    ],
                    "release_date": "2002-10-18",
                    "revenue": 249348933,
                    "runtime": 115,
                    "spoken_languages": [
                        {
                            "iso_639_1": "en",
                            "name": "English"
                        }
                    ],
                    "status": "Released",
                    "tagline": "Before you die, you see",
                    "title": "The Ring",
                    "video": false,
                    "vote_average": 6.5,
                    "vote_count": 3218,
                    "videos": {
                        "results": [
                            {
                                "id": "533ec654c3a368544800040d",
                                "iso_639_1": "en",
                                "iso_3166_1": "US",
                                "key": "ymPUAsPsTwg",
                                "name": "The Ring - Trailer",
                                "site": "YouTube",
                                "size": 1080,
                                "type": "Trailer"
                            }
                        ]
                    },
                    "images": {
                        "backdrops": [
                            {
                                "aspect_ratio": 1.777777777777778,
                                "file_path": "/kQOLgJGvFjQ7EwGfaPkW9dlGFXJ.jpg",
                                "height": 1080,
                                "iso_639_1": null,
                                "vote_average": 5.522,
                                "vote_count": 4,
                                "width": 1920
                            },
                            {
                                "aspect_ratio": 1.777777777777778,
                                "file_path": "/gRQucG6XnNgSQn863V5ho50J3hx.jpg",
                                "height": 1080,
                                "iso_639_1": null,
                                "vote_average": 5.278,
                                "vote_count": 7,
                                "width": 1920
                            },
                            {
                                "aspect_ratio": 1.777777777777778,
                                "file_path": "/8FtREGl8o7MdqnhHAaRNwIMitW2.jpg",
                                "height": 720,
                                "iso_639_1": null,
                                "vote_average": 5.15,
                                "vote_count": 8,
                                "width": 1280
                            },
                            {
                                "aspect_ratio": 1.777777777777778,
                                "file_path": "/d0CcSunrTYX8cDASsRlnNEGw5vj.jpg",
                                "height": 1080,
                                "iso_639_1": null,
                                "vote_average": 5.144,
                                "vote_count": 8,
                                "width": 1920
                            },
                            {
                                "aspect_ratio": 1.777777777777778,
                                "file_path": "/3zysegD8W12DfiX5dJMC98MXnw2.jpg",
                                "height": 720,
                                "iso_639_1": "en",
                                "vote_average": 5.110163468372424,
                                "vote_count": 4,
                                "width": 1280
                            },
                            {
                                "aspect_ratio": 1.777777777777778,
                                "file_path": "/2DqDE1oO5DjYMgApMjYWcs0wBe.jpg",
                                "height": 720,
                                "iso_639_1": null,
                                "vote_average": 5.106,
                                "vote_count": 2,
                                "width": 1280
                            },
                            {
                                "aspect_ratio": 1.777777777777778,
                                "file_path": "/5PiKNmbGdUFJ6Q5SyQKC9Sezfge.jpg",
                                "height": 720,
                                "iso_639_1": null,
                                "vote_average": 5.106,
                                "vote_count": 2,
                                "width": 1280
                            },
                            {
                                "aspect_ratio": 1.777777777777778,
                                "file_path": "/mVGpoARiPyxeSqA2fJcJUr54nEg.jpg",
                                "height": 720,
                                "iso_639_1": null,
                                "vote_average": 5.074,
                                "vote_count": 7,
                                "width": 1280
                            },
                            {
                                "aspect_ratio": 1.780346820809249,
                                "file_path": "/izOaTuSuJdxyvVHBBWNTQnsVbVN.jpg",
                                "height": 1038,
                                "iso_639_1": null,
                                "vote_average": 5.056,
                                "vote_count": 5,
                                "width": 1848
                            },
                            {
                                "aspect_ratio": 1.777777777777778,
                                "file_path": "/allje744qUpCyQr08vfkZe2iFnG.jpg",
                                "height": 720,
                                "iso_639_1": null,
                                "vote_average": 4.894,
                                "vote_count": 6,
                                "width": 1280
                            },
                            {
                                "aspect_ratio": 1.777777777777778,
                                "file_path": "/wBhfYoZMlVZVgTZry03X0mu3vnf.jpg",
                                "height": 720,
                                "iso_639_1": null,
                                "vote_average": 4.894,
                                "vote_count": 6,
                                "width": 1280
                            }
                        ],
                        "posters": [
                            {
                                "aspect_ratio": 0.6666666666666666,
                                "file_path": "/zHJFdhqEXZJxG653oZvOM3PmNON.jpg",
                                "height": 1500,
                                "iso_639_1": "en",
                                "vote_average": 5.866,
                                "vote_count": 28,
                                "width": 1000
                            },
                            {
                                "aspect_ratio": 0.6666666666666666,
                                "file_path": "/zMVpi0ohdlZw6st07SAbHYu7b9W.jpg",
                                "height": 1500,
                                "iso_639_1": "en",
                                "vote_average": 5.54,
                                "vote_count": 30,
                                "width": 1000
                            },
                            {
                                "aspect_ratio": 0.6985157699443414,
                                "file_path": "/nMrB9ZNfRAAqjJ9EtyEOKeU99qg.jpg",
                                "height": 1078,
                                "iso_639_1": "pt",
                                "vote_average": 5.52,
                                "vote_count": 8,
                                "width": 753
                            },
                            {
                                "aspect_ratio": 0.6666666666666666,
                                "file_path": "/ohVQGUxohlMkRXszJYhlrfGgKrE.jpg",
                                "height": 2100,
                                "iso_639_1": "en",
                                "vote_average": 5.388,
                                "vote_count": 4,
                                "width": 1400
                            },
                            {
                                "aspect_ratio": 0.6666666666666666,
                                "file_path": "/cK4AGp0zf0didfUDVGNqZafXnjR.jpg",
                                "height": 1500,
                                "iso_639_1": "he",
                                "vote_average": 5.384,
                                "vote_count": 2,
                                "width": 1000
                            },
                            {
                                "aspect_ratio": 0.6666666666666666,
                                "file_path": "/fePjuZ4YtSulGVQ4AhIstugGZx8.jpg",
                                "height": 1500,
                                "iso_639_1": "de",
                                "vote_average": 5.384,
                                "vote_count": 2,
                                "width": 1000
                            },
                            {
                                "aspect_ratio": 0.6666666666666666,
                                "file_path": "/gkcasLJd4LdkrAhKpuT8cEsR6qh.jpg",
                                "height": 2100,
                                "iso_639_1": "fr",
                                "vote_average": 5.384,
                                "vote_count": 2,
                                "width": 1400
                            },
                            {
                                "aspect_ratio": 0.6666666666666666,
                                "file_path": "/4JJ9eyMegz8vT830t0LvzQe1VJu.jpg",
                                "height": 1500,
                                "iso_639_1": "hu",
                                "vote_average": 5.384,
                                "vote_count": 2,
                                "width": 1000
                            },
                            {
                                "aspect_ratio": 0.6666666666666666,
                                "file_path": "/vwldpALjeYsr0kHR7UWa1PdKpvc.jpg",
                                "height": 1500,
                                "iso_639_1": "ru",
                                "vote_average": 5.384,
                                "vote_count": 2,
                                "width": 1000
                            },
                            {
                                "aspect_ratio": 0.6666666666666666,
                                "file_path": "/iqvITaaRNZhibX4MT55Sic5X56l.jpg",
                                "height": 2100,
                                "iso_639_1": "en",
                                "vote_average": 5.322,
                                "vote_count": 5,
                                "width": 1400
                            },
                            {
                                "aspect_ratio": 0.6666666666666666,
                                "file_path": "/yma8EIIH9Orhhmj8ysvqGmfVI4R.jpg",
                                "height": 900,
                                "iso_639_1": "en",
                                "vote_average": 5.318,
                                "vote_count": 3,
                                "width": 600
                            },
                            {
                                "aspect_ratio": 0.6666666666666666,
                                "file_path": "/tWFwNenZdFTMkGEQGqqSlNPjWyO.jpg",
                                "height": 2100,
                                "iso_639_1": "de",
                                "vote_average": 5.318,
                                "vote_count": 3,
                                "width": 1400
                            },
                            {
                                "aspect_ratio": 0.6666666666666666,
                                "file_path": "/gghD2ZIPjMzLnnBuT3AZQGYnIW9.jpg",
                                "height": 3000,
                                "iso_639_1": "en",
                                "vote_average": 5.312,
                                "vote_count": 1,
                                "width": 2000
                            },
                            {
                                "aspect_ratio": 0.6666666666666666,
                                "file_path": "/mJ4Nyy5xO6eEngqaH5y7Vovym5d.jpg",
                                "height": 1500,
                                "iso_639_1": "cs",
                                "vote_average": 5.312,
                                "vote_count": 1,
                                "width": 1000
                            },
                            {
                                "aspect_ratio": 0.7047353760445683,
                                "file_path": "/rHTUfJE1y7XGU3hk6l3W5rQnku1.jpg",
                                "height": 1077,
                                "iso_639_1": "pt",
                                "vote_average": 5.312,
                                "vote_count": 1,
                                "width": 759
                            },
                            {
                                "aspect_ratio": 0.6666666666666666,
                                "file_path": "/9z64Jf7CiNWzrmkUDb9ECu7onvp.jpg",
                                "height": 1500,
                                "iso_639_1": "he",
                                "vote_average": 5.312,
                                "vote_count": 1,
                                "width": 1000
                            },
                            {
                                "aspect_ratio": 0.6666666666666666,
                                "file_path": "/qEkiit6fR3MniZTRTaGLwA0O2yr.jpg",
                                "height": 1500,
                                "iso_639_1": "en",
                                "vote_average": 5.302763080540858,
                                "vote_count": 18,
                                "width": 1000
                            },
                            {
                                "aspect_ratio": 0.6666666666666666,
                                "file_path": "/qC04ukuJTmdmm3iZjSt31K0Pnqa.jpg",
                                "height": 1500,
                                "iso_639_1": "en",
                                "vote_average": 5.302,
                                "vote_count": 11,
                                "width": 1000
                            },
                            {
                                "aspect_ratio": 0.6666666666666666,
                                "file_path": "/5zFcUtWeP8eC7QRdLCk5ol6Dv2A.jpg",
                                "height": 1500,
                                "iso_639_1": "en",
                                "vote_average": 5.284,
                                "vote_count": 9,
                                "width": 1000
                            },
                            {
                                "aspect_ratio": 0.6666666666666666,
                                "file_path": "/wSIu0DfjORY5g0ixNuJIVKUKFDP.jpg",
                                "height": 2100,
                                "iso_639_1": "es",
                                "vote_average": 5.246,
                                "vote_count": 2,
                                "width": 1400
                            },
                            {
                                "aspect_ratio": 0.6666666666666666,
                                "file_path": "/38EjcLTQgRikuzpVbUfWeIJocA9.jpg",
                                "height": 1200,
                                "iso_639_1": "es",
                                "vote_average": 5.246,
                                "vote_count": 2,
                                "width": 800
                            },
                            {
                                "aspect_ratio": 0.70875,
                                "file_path": "/nuylTD95ikd539A9jpqSAJB0xvf.jpg",
                                "height": 800,
                                "iso_639_1": "pt",
                                "vote_average": 5.246,
                                "vote_count": 2,
                                "width": 567
                            },
                            {
                                "aspect_ratio": 0.6666666666666666,
                                "file_path": "/ibg14SFP5AydxkbJYuihKhKVa8W.jpg",
                                "height": 750,
                                "iso_639_1": "es",
                                "vote_average": 5.246,
                                "vote_count": 2,
                                "width": 500
                            },
                            {
                                "aspect_ratio": 0.6670010030090271,
                                "file_path": "/2P4wdZd2wvUzBwAZU6n7Dwcua9Y.jpg",
                                "height": 997,
                                "iso_639_1": "es",
                                "vote_average": 5.246,
                                "vote_count": 2,
                                "width": 665
                            },
                            {
                                "aspect_ratio": 0.75,
                                "file_path": "/s1Cr1tXWjHU5sw2yDpSIEgPKt1k.jpg",
                                "height": 800,
                                "iso_639_1": "fr",
                                "vote_average": 5.246,
                                "vote_count": 2,
                                "width": 600
                            },
                            {
                                "aspect_ratio": 0.6747638326585695,
                                "file_path": "/6huw3p8WSM12fuIIg2RxehQXjuI.jpg",
                                "height": 1482,
                                "iso_639_1": "en",
                                "vote_average": 5.22,
                                "vote_count": 13,
                                "width": 1000
                            },
                            {
                                "aspect_ratio": 0.79609375,
                                "file_path": "/cNvSrbWR5xuNMO3AvknTRrswBg.jpg",
                                "height": 1280,
                                "iso_639_1": "es",
                                "vote_average": 5.18,
                                "vote_count": 3,
                                "width": 1019
                            },
                            {
                                "aspect_ratio": 0.6666666666666666,
                                "file_path": "/ieRObl0j0m7uIreFqQPMGdCtcF5.jpg",
                                "height": 750,
                                "iso_639_1": "it",
                                "vote_average": 5.172,
                                "vote_count": 1,
                                "width": 500
                            },
                            {
                                "aspect_ratio": 0.6657789613848203,
                                "file_path": "/nfSGcFi37ZsGfOMUEiKb74JqwBH.jpg",
                                "height": 751,
                                "iso_639_1": "uk",
                                "vote_average": 5.172,
                                "vote_count": 1,
                                "width": 500
                            },
                            {
                                "aspect_ratio": 0.6666666666666666,
                                "file_path": "/gsPZXNya3GB8AZIYk4QISZVFCWA.jpg",
                                "height": 1500,
                                "iso_639_1": "de",
                                "vote_average": 5.172,
                                "vote_count": 1,
                                "width": 1000
                            },
                            {
                                "aspect_ratio": 0.6666666666666666,
                                "file_path": "/rdbiwyyhGGAIL02WxFYFia3vnrT.jpg",
                                "height": 1500,
                                "iso_639_1": "es",
                                "vote_average": 5.172,
                                "vote_count": 1,
                                "width": 1000
                            },
                            {
                                "aspect_ratio": 0.7125,
                                "file_path": "/wweKv4uyq0BPuPDVoSLgEOx5PfT.jpg",
                                "height": 800,
                                "iso_639_1": "da",
                                "vote_average": 5.172,
                                "vote_count": 2,
                                "width": 570
                            },
                            {
                                "aspect_ratio": 0.708,
                                "file_path": "/gmqKNx4IvVSjuyYJ7KxfuMjcqAG.jpg",
                                "height": 1500,
                                "iso_639_1": "it",
                                "vote_average": 5.106,
                                "vote_count": 2,
                                "width": 1062
                            },
                            {
                                "aspect_ratio": 0.6826666666666666,
                                "file_path": "/9t3XqfMB8rq2JD8miTN26Fbvgxe.jpg",
                                "height": 750,
                                "iso_639_1": "it",
                                "vote_average": 5.106,
                                "vote_count": 2,
                                "width": 512
                            },
                            {
                                "aspect_ratio": 0.7044198895027625,
                                "file_path": "/wyU7WmbIQ8wWdCVBrIPMny1X1b0.jpg",
                                "height": 1086,
                                "iso_639_1": "it",
                                "vote_average": 5.106,
                                "vote_count": 2,
                                "width": 765
                            },
                            {
                                "aspect_ratio": 0.6666666666666666,
                                "file_path": "/tW6NtPisT8zL3a6bHlcNjuqakFb.jpg",
                                "height": 1200,
                                "iso_639_1": "ru",
                                "vote_average": 5.072,
                                "vote_count": 3,
                                "width": 800
                            },
                            {
                                "aspect_ratio": 0.7064285714285714,
                                "file_path": "/3JvUF1WYM4mogk6WmsKGzyaW8uc.jpg",
                                "height": 1400,
                                "iso_639_1": "de",
                                "vote_average": 5.06,
                                "vote_count": 4,
                                "width": 989
                            },
                            {
                                "aspect_ratio": 0.7187187187187187,
                                "file_path": "/ydVk6424A1fFkOWyKSiWN1jfIU9.jpg",
                                "height": 999,
                                "iso_639_1": "en",
                                "vote_average": 4.756,
                                "vote_count": 8,
                                "width": 718
                            }
                        ]
                    }
                }});
        });
    }
};