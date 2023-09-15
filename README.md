1. Here added 3 features of this Project:

    ➤ About this Project: In this project, users have the opportunity to browse and select from a collection of nine distinct courses, each covering a unique subject area. Users are empowered to register for any course of their choice, providing them with the flexibility to pursue their specific interests and educational goals.

    ➤ In this system, users are granted the ability to enroll in courses based on their individual preferences. To do so, they simply need to click the "Select" button associated with their chosen course. Crucially, each course listing prominently displays its corresponding price and credit value. This transparency empowers users to make selections that align precisely with their budget and credit requirements, facilitating a tailored and informed decision-making process.

    ➤ Within the system, a user's course selection process is governed by essential rules and checks. Firstly, to ensure fairness and uniqueness, users cannot select the same course twice, and a warning is triggered if such an attempt is made. Additionally, a credit limit of 20 credits is enforced, and if a user tries to surpass this limit by selecting more courses, the system issues a warning, signaling that their 20-credit allocation has been exhausted. These measures collectively aim to optimize user experience while preserving the integrity of course selections and credit allocations.




2. Here discuss how I managed the state in my assignment project.

    In this project, I use 5 `useState` function. They are  *bookmarks,remainingHour,courses,totalCredit,totalPrice*. Those state plays a pivotal role, accepting initial states and returning arrays with two elements. The utilization of state management spans across two key files, Courses.jsx and App.jsx, where four distinct states come into play:

    1. *bookmarks*: This state variable within App.jsx serves as a repository for the comprehensive list of available courses, meticulously sourced from an external data file (data.json). The state undergoes dynamic updates via the `setBookmarks` function when the data retrieval process is successfully executed.

    2. *remainingHour*: Another state within App.jsx, `setRemainingHour` signifies the user's remaining credit hours, which are available for course selection. This value fluctuates dynamically as courses are added or removed from the bookmark cart.
    
    3. *courses*: A critical state within Courses.jsx, `setCourses` functions as an array, housing the names of courses that a user has selected for enrollment.
    
    4. *totalCredit*: This state variable, still within App.jsx, diligently keeps track of the cumulative credit hours associated with the courses selected by the user, offering real-time insights into their course load.
    
    5. *totalPrice*: Lastly, the `setTotalPrice` state, residing in App.jsx, meticulously tallies the total cost of the courses selected by the user, providing a comprehensive overview of financial commitments. 
    
    This intricate state managed by Sajjaduj Jaman Emon, ensures precise tracking of course selection, credit hours, and associated costs, thereby enhancing the overall user experience and administrative control.