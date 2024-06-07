---
title: "Character Cleaning"
date: "2024-04-20"
tags: ["data", "excel", "chatgpt", "mental-breakdown", "mistakes"]
social_image: "/media/Characters/characters6.png"
description: "A detailed guide on character cleaning using various tools and overcoming challenges."
---

### Data Inaccuracy
By the end of the project, cleaning the data remained my primary task. During the analysis, it quickly became apparent that accurately analyzing the data would be challenging. Since the metadata came from AO3, where all users could individually input and write their data, there were numerous inaccuracies and deviations that couldn't be easily resolved by machine. For instance, within a single dataset, over 800 different characters were mentioned, many of which were recorded multiple times in various forms.
- Tom Riddle
- Tom Marvolo Riddle
- Voldemort
- Lord Voldemort
- Tom Riddle | Voldemort
- etc.

Initially, I attempted to manually address these issues in Excel by searching for characters and aliases that were familiar to me. However, I soon realized this approach was unsustainable.

![Excel](/media/Characters/characters6.png)

![Excel](/media/Characters/cleaning_character2.png)

![Excel](/media/Characters/characters1.png)

I then subscribed to ChatGPT Premium, hoping AI could assist in solving my problem. Unfortunately, even for AI, it was too large a task to clean the data thoroughly and quickly. Therefore, I began to go through the data line by line.

Characters were not the only dimension with this issue; relationships and fandoms also had similar problems. As I was already going through each row individually, I decided to add fandom and gender information to each character, which would help me categorize the relationships into the relationship type and identify the fandoms of the characters involved.

![Excel](/media/Characters/characters4.png)

With the help of ChatGPT and manual searches for characters on Google, it took me two days to clean a single dataset. These two days ended up being somewhat wasted, as I had to repeat the process at least two more times.

My first mistake was starting with the wrong dataset. Due to my lack of knowledge, I began with the dataset I was most familiar with (Harry Potter). However, I later realized I should have started with the Overall Top 1000 dataset. This would have saved me from duplicating a lot of work in the other three datasets.

The second mistake was focusing on the character list instead of the characters mentioned in the relationships and their respective spellings. This was crucial for implementing my idea effectively.

### Steps Followed

Here are the steps I eventually followed:

#### 1. Extract all characters from the relationships in the Overall dataset.
![Excel](/media/Characters/chatgpt_cleanup_charactera.png)

#### 2. Clean these characters and add information about their gender and fandom.
![Excel](/media/Characters/characters8.png)

#### 3. Replace the relationship dataset with the cleaned names.
![Excel](/media/Characters/characters3.png)

#### 4. Combine information about characters, ships, gender, and fandom.
![Excel](/media/Characters/characters5.png)

#### 5. Cross-check all entries with the other datasets to avoid redundant work.
![Excel](/media/Characters/characters7.png)

#### 6. Repeat steps 1-4 for the remaining datasets.
![Excel](/media/Characters/cleaning_character1.png)

### More Problems and Solutions
Even though these steps sound simple, this task was one of the most tedious I have ever undertaken. Excel struggled with even basic tasks like =VLOOKUP if there was a space where there shouldn't have been one.

On my third attempt, I finally managed to get ChatGPT to fill in 20 characters at a time. I then had to merge these with individual CSV files and still clean them manually. Many of the mistakes I made during this process only became apparent later during the visualization phase. This made it even more difficult to trace back to the original error and fix it.

<video controls width="100%">
  <source src="/media/Characters/characters2.mov" type="video/mp4">
  Your browser does not support the video tag.
</video>

To this day, I'm not sure if I missed anything in the 2400 lines.

> If you have found any errors, please contact me via the contact form.
