---
title: "Data Scraping"
date: "2024-04-10"
tags: ["data", "excel", "chatgpt", "api"]
social_image: "/media/Scraping/ao3scraper.png"
description: "An overview of the methods and tools used to scrape data from AO3, including initial findings and data dimensions."
---
### API
Archive Of Our Own (AO3) does not offer a public API. Therefore, my first step was to find a way to retrieve data from AO3. There are a few unofficial APIs provided by the community. The first one I tried was this [one](https://fandomstats.org/ao3-tag-stats/).

![ao3-tag-stats](/media/Scraping/fandomstats.png)

Unfortunately, the data didn't quite meet my requirements.

After some research, I came across this [Github page](https://github.com/radiolarian/AO3Scraper).

This API allowed me to scrape the metadata of a number of fanfiction works from a search link. (Only public fanfiction works)

After the first 2-3 test runs with 100 fanfiction works each, I decided to fetch the first 1000 works, sorted by Kudos, and analyze them in more detail.

![Ao3 Scraper](/media/Scraping/ao3scraper.png)

The data I was able to retrieve with this API was very promising and provided a good basis for further analyses.

![CSV Data Dimensions](/media/Scraping/datendimensionen.png)

### Data Dimensions

The data dimensions accessible through this API were very promising and provided a good basis for further analysis.

- **work_id**: 10057010
- **title**: All the Young Dudes
- **author**: ['MsKingBean89']
- **rating**: Mature
- **category**: M/M
- **fandom**: Harry Potter - J. K. Rowling
- **relationship**: Sirius Black/Remus Lupin, Sirius Black & Remus Lupin, James Potter/Lily Evans Potter
- **character**: Remus Lupin, Sirius Black, James Potter, Lily Evans Potter, Peter Pettigrew, Severus Snape, Minerva McGonagall, Bellatrix Black Lestrange, Narcissa Black Malfoy, Albus Dumbledore, Mulciber Sr. (Harry Potter), Horace Slughorn, Mary Macdonald, Marlene McKinnon, Poppy Pomfrey, Walburga Black, Regulus Black, Fenrir Greyback
- **additional tags**: Marauders' Era, Marauders, Marauders Friendship, wolfstar, Get Together, Slow Burn, so slow, it's slow, seriously, Complete, Canon Compliant, Angst, Fluff, Fluff and Angst, Requited Love, Canonical Character Death, First War with Voldemort, First Kiss, Period Typical Attitudes
- **language**: English
- **published**: 02.03.2017
- **status**: Completed
- **status date**: 12.11.2018
- **words**: 526,969
- **chapters**: 188/188
- **comments**: 36,178
- **kudos**: 206,611
- **bookmarks**: 38,792
- **hits**: 13,867,134
- **all_kudos**: ['Wysterie', 'Sxull', 'larrys_rat', 'MMWPAPAPTPTMM', 'obsessed_withgaywizards', 'Komas', 'love_dani_m', 'Nelcina', 'lavenderlunarclouds', 'ourdistantnorthstar', 'TheCoolest_Astrophile', 'fang1rl_f0rever', 'AllRosesHaveTheirThorns', 'grace_di_angelo13', 'froggy_porridge', 'Kar_LexAlexandra_M', 'clockwork_worm', 'CynicalCephalalgy', 'Barbs0295', 'pestoest', 'th3osnight', 'awaemanon', 'FlagMaster7', 'oleandered', 'Chaotic_Salad', 'Rubberfish', 'manicpixiegirldream', 'Isy_Hawk', 'Gozdziki_2902', 'lea_bcmn0208', 'boredbooklover', 'ebonycwillows', 'Beautifullikeblood', 'Pen_lane', 'tanmaqflo', 'dearluvmaradeurs', 'tiffanycourt513', 'Sabrieltrash11', 'Fallingfromtheclouds', 'MCaroba', 'Theo_dziamdziam', 'awaken_crystal', 'yoongisuniverse', 'kitch_n_s_nk', 'NickyAAA', 'AngelRos3', 'Silverwitchuzb', 'Laughinglouee', 'hjkhbhnn', 'Foreverosa', ...] (and many more)

### First Findings
After reviewing this data, I found that I was particularly interested in what content, themes, and characters were most popular on AO3. I was fascinated by the many additional tags and wanted to analyze these in more detail. At the same time, I also wanted to find out the differences between the individual fandoms.

Therefore, I decided to analyze the three most prominent fandoms:
- Harry Potter - J. K. Rowling
- Marvel
- Boku No Hero

I planned to analyze and compare the first 1000 works with the most Kudos from each fandom according to the same principle.

As a result, I had four CSV files, each with 1000 lines and several thousand entries.
