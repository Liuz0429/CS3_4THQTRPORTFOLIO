# Seatwork #2 - Getting to know CSS Position and z-index.
### This seatwork will ask you to implement the different CSS position on a given code.
### short link to this .md file is: https://bit.ly/4c61P9K
#### Resources (also found in Khub week 5)
- [4 Minute Youtube Video on CSS Position](https://www.youtube.com/watch?v=YEmdHbQBCSQ)
- [CSS Position Tutorial](https://roycan.github.io/CssPositioningZIndexLab/)

### Instructions: 
1. This is individual submission in khub, but you can work with a partner.  When you submit in khub please place both your names in the submission bin.
2. Guided Activity (30 minutes), please follow what is being required.  

    - Make a copy of this .md file to your Q4 repository and name it as **SectionLNseatwork2.md** example **9LiCruzSeatwork2.md**. Place it in your q4 repository vscode local computer. Committing frequently to your Github repository.  
    - Copy the code below and paste it inside a new file (name it as SectionLNseatwork2.html). Place this file in the same location where the .md file is saved. 
    - Change the content values of the meta tags to your names for author/s and the date today for revised.
    - Please do the following tasks that will ask you to reposition HTML elements then answer the guided question for each task on the .md file. Commit changes to the .md file and to the .html file as well.
    **- This seatwork is worth 20pts and should be submitted by the end of the period** The link to [KHub submission bin](https://khub.mc.pshs.edu.ph/mod/assign/view.php?id=15481).
      - Submit the links to your .md file and .html file.

```html
<!DOCTYPE html>
<html>
<head>
  <meta name="author" content="<your names>" />
  <meta name="revised" content="<date today>" />
  <style>
    body { font-family: Arial, sans-serif; }
    .header, .footer {
      background: lightblue;
      padding: 10px;
    }
    .footer {
       opacity: 0.5;
    }
    .sidebar {
      background: lightgreen;
      width: 150px;
      height: 200px;
    }
    .content {
      background: lightyellow;
      width: 300px;
      height: 200px;
    }    
  </style>
</head>
<body>
  <div class="header">Header</div>
  <div class="sidebar">Sidebar</div>
  <div class="content">Main Content</div>
  <div class="footer">Footer</div>
</body>
</html>
```
### Step 1 (Static vs Relative):

- Add in css ```position: relative; top: 20px; left: 20px;``` to .sidebar.

- Guided Question: What changed compared to the default static positioning? Try to give different values to top and left or you can change it to bottom, right.

- **Answer: Compared to the default static positioning, the element gets moved away from where it originally was, but it doesn't push away the other elements around it. The top or left or right or bottom is from where the element gets moved from relative to the original space it took. For example, since the example had top, it moved the element 20px away from the top of where it originally was.**

### Step 2 (Fixed):

- Add in css ```position: fixed; bottom: 0; width: 100%;``` to .footer.

- Guided Question: What happens when you scroll the page? Why does the footer behave differently from position relative?

- **Answer: When the page gets scrolled, the footer stays in the same position no matter where the user scrolls. The footer behaves differently from position: relative because position: fixed makes the element constantly fixed on the screen while position: relative just moves it from its original position and has no effect on the user's viewport.**

### Step 3 (Absolute):

- Add in css ```position: absolute; top: 66px; left: 200px;``` to .content.

- Guided Question: What is the effect of position: absolute on an element? How is it different from fixed?

- **Answer: Position: absolute puts the element closer or right next to the nearest element/ancestor above it, with the top and left values adjusting its spacing away from the nearest element/ancestor. It is different from fixed as fixed makes it constantly fixed on the viewport while absolute places the element relative to its nearest ancestor.**

### Step 4 : (Absolute)

- Add in html ```<div class="notice">Notice!</div>``` and include the css below:

```css
.notice {
    position: absolute;
    top: 60px;
    left: 400px;
    background: orange;
    padding: 10px;
    z-index: 2;
}
```

- Give .content a z-index: 1.

- Guided Question: Why does the notice appear on top of the content? What happens if you swap the z‑index values?

- **Answer: Notice appears on top of the content because it has a higher z-index number. If the z-index values are swapped, content instead appears on notice instead of the other way around.**

- Challenge: 
    * What changes that you have to do on the code that will position .notice box on the top right corner of the .content box? Please write the code on paper as well (both html and css on the part of .notice and .content).
    - **Answer: Make the .content box be the parent of .notice, then change .notice's top value to be 0, and change its left property to become right and change its value to 0 as well.**
    ```   
    <div class="content">Main content
    <div class="notice">Notice!</div></div> 
    ```
    ```
        .notice {
        position: absolute;
        top: 0;
        right: 0;
        background: orange;
        padding: 10px;
        z-index: 2;
    }
    ```
    * Try to change the position of .content to relative then to fixed. What do you observed each time?
    - **Answer: .content moves to around the middle when its position is relative, then it goes back to its original position (similar to when its position was absolute) when its position is fixed.**
    * What do you observe on about the effect of z-index on .notice and .content boxes?
    - **Answer: Z-index changes the order of the .notice and .content boxes. When .content has a higher z-index, .notice is hidden. When .notice has a higher z-index, .notice is visible, layered on top of .content.**

3. Please answer the following reflection questions (15 minutes)

    a. Could you summarize the differences between the CSS position values (static, relative, absolute, fixed)? 
    - **Answer: Static is the default position value (nothing changes), relative makes the element positioned to its normal position based on set numerical values (top, bottom, left, right), absolute positions the element relative to its nearest ancestor, fixed makes the element stay on a fixed part of the viewport no matter where the user scrolls.**

    b. How does absolute positioning depend on its parent element?
    - **Answer: Absolute positioning depends on the parent element's position values. An absolute positioned element is basically sort of magnetically attached to its parent element, to use an analogy.**

    c. How do you differentiate sticky from fixed (you can research on sticky)?
    - **Answer: Sticky acts like a relative positioned element until it reaches a scroll threshhold, then it becomes fixed. Fixed is already fixed from the start, and there's no conditions for it.**

    d. If you were designing a webpage for a school event, how might you use positioning to highlight important information? Please give concrete examples.
    - **Answer: If I was designing a webpage for a school event, one of the ways I could use positioning to highlight important information would be through position: fixed. I could make important information stay on the user's screen no matter where they scroll with the fixed position value, ensuring that the user is constantly reminded of the important information.**
