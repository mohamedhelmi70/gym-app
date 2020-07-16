import {valery, damir, valeryBack} from "../../assets";

const sessionsState = {
    isLoading: true,
    sessions: [
        {
            id: 1,
            name: "Back and Abs",
            level: "Advanced",
            no_people: 13,
            img: valery,
            backImg: valeryBack,
            lastClientName: "Catherine Williams",

            exercises: [
                {id: 'ex1', name: "Pull-up", status: true, set: 5, reps: 10, rest: 60},
                {id: 'ex2', name: "Push-up", status: true, set: 5, reps: 10, rest: 60},
                {id: 'ex3', name: "Cat-pose", status: true, set: 5, reps: 10, rest: 60},
                {id: 'ex4', name: "Sit-up", status: true, set: 5, reps: 10, rest: 60},
                {id: 'ex5', name: "Squats", status: true, set: 5, reps: 10, rest: 60},
                {id: 'ex6', name: "Pull-up", status: false, set: 5, reps: 10, rest: 60}
            ]
        },
        {
            id: 2,
            name: "Back and Abs",
            level: "Begineer",
            no_people: 28,
            img: damir,
            backImg: valeryBack,
            lastClientName: "Catherine Williams",
            exercises: [
                {id: 'ex1', name: "Pull-up", status: true, set: 5, reps: 10, rest: 60},
                {id: 'ex2', name: "Push-up", status: true, set: 5, reps: 10, rest: 60},
                {id: 'ex3', name: "Cat-pose", status: true, set: 5, reps: 10, rest: 60},
                {id: 'ex4', name: "Sit-up", status: true, set: 5, reps: 10, rest: 60},
                {id: 'ex5', name: "Squats", status: true, set: 5, reps: 10, rest: 60},
                {id: 'ex6', name: "Pull-up", status: false, set: 5, reps: 10, rest: 60}
            ]
        },
        {
            id: 3,
            name: "Back and Abs",
            level: "Advanced",
            no_people: 13,
            img: valery,
            backImg: valeryBack,
            lastClientName: "Catherine Williams",
            exercises: [
                {id: 'ex1', name: "Pull-up", status: true, set: 5, reps: 10, rest: 60},
                {id: 'ex2', name: "Push-up", status: true, set: 5, reps: 10, rest: 60},
                {id: 'ex3', name: "Cat-pose", status: true, set: 5, reps: 10, rest: 60},
                {id: 'ex4', name: "Sit-up", status: true, set: 5, reps: 10, rest: 60},
                {id: 'ex5', name: "Squats", status: true, set: 5, reps: 10, rest: 60},
                {id: 'ex6', name: "Pull-up", status: false, set: 5, reps: 10, rest: 60}
            ]
        },
    ],
};

export default sessionsState;