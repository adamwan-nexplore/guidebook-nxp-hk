# Software Engineer Technical Challenge (Mobile)

## Description

As a user, I want to see and search some photos from stock through a mobile app

## API Specification

Get a list of photos

```json
// GET https://64266c9f556bad2a5b4f7749.mockapi.io/photos
[
  {
    "createdAt": "2023-03-31T05:08:38.768Z",
    "url": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/855.jpg",
    "description": "The Football Is Good For Training And Recreational Purposes",
    "location": "Jorgeboro",
    "createdBy": "Brandon Haley MD",
    "takenAt": "2022-11-19T19:22:18.346Z",
    "id": "1"
  },
  ...
]
```

We are using mockAPI to provide the mock response

You can check the manual [here](https://github.com/mockapi-io/docs/wiki "https://github.com/mockapi-io/docs/wiki")

## Requirements

### User Requirements

- The user can see a list of photos with the location in chronological order
- In the listing page, the user can search the photos using a keyword
- In the listing page, the user can click each photo to see it individually with location, description and the name of creator
- You are free to design the UI

### Technical Requirements

- It must be production-ready to compile to Android and iOS
- You should implement your solution using `Dart 3` and `Flutter 3.13`
- You are free to use any third-party libraries
- Source codes should be stored in GitHub as a public repository
- You should provide a README explaining your work

### Bonus Points

- Photo Caching (either use local database or local persistent storage)
- Automated Tests
- Pagination

## Assessment Criteria

- A functional App
- Easy-to-follow implementations (state management, widgets, etc)
- Good coding styles and formatting

## Submission

- Please share your Git repository link to us
- Avoid words `nexplore` and `challenge`
- Do not copy-paste any parts of this README

## Others

- We are happy to answer any questions
- We expect the assignment will take you no more than 4 hours. You can always request for more time
- We value quality over speed
