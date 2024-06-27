const vueData = {
    vueNote: [

        {
            id: 1,
            title: "vue",
            note: [
                {
                    text1: `
                    Computed properties: Unlike methods, they don't accept any arguments, but they do have access to existing state. They're built for performance and track/cache their own dependencies so they're great for creating derived data from your state. 

                    Methods: Unlike computed properties, methods can take arguments, however, the method will not track its dependencies or cache any of the data passed to it. 
                    
                    Watchers: These are particularly for reacting to a change in state that Vue itself won't do automatically (like update the DOM). I try and use watchers very sparingly, but they do have their uses. One instance I sometimes find myself needing is to reapply a jQuery plugin to a set of DOM els whenever data changes. That's just one example. 
            `
                }
            ]
        },
    ]
}