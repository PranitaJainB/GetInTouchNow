
![alt text](image-1.png)

![alt text](image.png)

### Validation

![alt text](image-3.png)

![alt text](image-4.png)


### Figma Design Link

[View Figma Design](https://www.figma.com/community/file/1349347949687912630/contact-form-page)




### Using README for Documenting my Learnings while creating this project

#### Project Installation Tips

1. Run `npm create vite@latest` to start a Vite project.
2. When prompted for a project name, enter `Contactus`.
3. This will create a new folder with the same project name.
4. Change directory to `Contactus`:

    ```bash
    cd Contactus
    ```

5. Install the dependencies:

    ```bash
    npm i
    ```

6. Run the project:

    ```bash
    npm run dev
    ```

   _This command runs a script named `dev` defined in your project's `package.json` file under the "scripts" section._

7. For text formatting in `.md` files, search for more options to understand various formatting features.

#### CSS Related Tips

1. In CSS, avoid setting explicit height and width for the parent element, as it may cause scroll bars. Instead, set it to `100vh`.
2. Start by designing layers in Figma. Create as many layers as you see initially or define them one by one with the respective CSS.
3. The latter option may involve minor issues related to deciding between `img`, `div`, or `nav` elements.
4. Pay attention to issues related to setting margin, height, and width.
5. Design one layer at a time for a cleaner approach.
6. tell chatgpt to produce correct md file , don't use the manual copy instead use copy button at the bottom
7. run following command to run the project's index.html file
   ```bash
   npm run dev

 _This command runs a script named `dev` defined in your project's `package.json` file under the "scripts" section._

7. For text formatting in `.md` files, search for more options to understand various formatting features.

#### CSS Related Tips

1. In CSS, avoid setting explicit height and width for the parent element, as it may cause scroll bars. Instead, set it to `100vh`.
2. Start by designing layers in Figma. Create as many layers as you see initially or define them one by one with the respective CSS.
3. The latter option may involve minor issues related to deciding between `img`, `div`, or `nav` elements.
4. Pay attention to issues related to setting margin, height, and width.
5. Design one layer at a time for a cleaner approach.
6. tell chatgpt to produce correct md file , don't use the manual copy instead use copy button at the bottom
7. Why are you creating the html - css in different project for testing , when you can create them write inside main project .
8. we will be using css modules this time so that at top level there is no conflict about style class names.
9. delet content of index.css , app.css which was default  . Global CSS vs Module CSS. How it works ?
10. use shortcut to print react function using snippet : ***rafce***  = react arrow function compoenent with export
11. when I renamed , i was facing the problem related to new name not recognize . try to open close VS Code to clear the cache.
12. to see what font is used , goto typography and check font-family: Inter;
13. after you find particular font into google font , click GET FONT . Inside click "Import " copy 2 things from here  : @import...,    font-family: "Inter", sans-serif;
14. if you are using module CSS then all className will be written into the {} ,  <div className={styles.heading}>  , here if you have to append multiple class name then use  <div className={`${styles.heading}` anotherClassName}> or  <button className={`${style.submit} ${style.btn_purple}`} >  it is because clearly style.submit is the JS variable and not the simple string as this is evedient that you are accessing it with object with dot operator
15. you can even print styles value to see if in cosole you see all other as direct key:value pair of the object styles
16. when you have to see hight and width---incomplete 
17. ask chatGPT to find difference b/w query params and route params
18. When user enters some value , they are going into query params . which is causing the refreshing of page as well. if you log event which is being passed from the function you can see input entered by user as well.
19. also when you click a button then you should be able to see the text as which button was clicked , via call or via chat, so let's also create 2 buttons , 1:09 timestamp
20. there is so much of CSS related task which I'm not able to do in react project because in react I canot see what are the properties set for the class . better you dig more into it or either design separately . 
21. even though I can see styles applied but name of style class is getting encoded . how to find real name from project
22. he also taught in this how to get icons from react icon library . 29:27 timestamp
23. he also taught that how we will build two button from single component by passing icon and button name
24. usestate timestamp = 1.20
25. when you try to access js variable in clg then if it's undefined then it shows object object
26. you pass variable or not , it will always be undefined  for boolean . so you don't have to define what is coming and what is not coming inside , but if this is typescript - you have to mention things as optional. 
27.  <button onClick={(e)=>sendToParent(e)}/  >. and  <button onClick={(e)=>{sendToParent(e)}}/  >. what is difference -- there is no difference ! just immediate return and block execution of function code. it might be different if you have multiple lines in function.
28.  <button onClick={sendToParent()}/  >. and  <button onClick={sendToParent}/  >. what is difference -->sendToParent() is invoked immediately when the component renders,In the second version, sendToParent is passed as a reference, and it will be called when the button is clicked.2nd one is correct.
29. const sendToParent = (e) => {onBtnClick(e.target.name);};  but I assigned  <button onClick={sendToParent}  how on click event is getting passed as paramter , even though I havn't passed it on click--->>> .  React automatically passes the event object as the first argument to the event handler function. So, when the button is clicked, sendToParent gets called with the event, allowing you to access e.target.name inside the function. This is a core feature of how event handlers work in React.
30. In your form, the email and phone inputs lack a name attribute, which is required for the data to be included in the query parameters upon submission. http://localhost:5173/?firstName=er&lastName=ret&submitButton=  you see submit button should not have the name property as this is evedient that it is visible in the url which is incorrect
31. page gets refresh on click of submit btn , as you can see in one of the commit , and also notice how params are sent to server in url . Forms allow users to submit data to a server for processing, such as in sign-ups or surveys.
32. to avoid above situation we have to use preventdefault . 
33. http://localhost:5173/  v/s http://localhost:5173/?name=aa&email=abc@gmail.com when you wrote e.preventDefault() then you should have went back to home instead of checking the effects on http://localhost:5173/?name=aa&email=abc@gmail.com . It took long time to understand that why it is re-rendering =because URL was wrong.
34. it took so long to find the actual spelling mistake at e.prevenDefault();  :( :( 
35. after e.preventDefault() was working properly page was not re-rendering!!!
36. if prop or state changes then only component re-renders.
37. in branch name useState : with variable no update on screen as component was not rendered. component only renders when there is the change in state / props . nothing like this happened so you don't see Thank you msg on screen. For that use "usestate"!! once we create useState , then on change of state - component is gaurenteed to re-render and hence our Thanks msg will be visible.


    

