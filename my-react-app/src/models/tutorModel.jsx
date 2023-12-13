
export class TutorModel {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    adminStatus: boolean;
    profilePictureLink: string;
    verifiedStatus: boolean;
    averageRatings: number;
    classes: string;
    description: string;
    price: number;
    times: string;
    mainLanguages: string;
    preferInPerson: boolean;
    cvLink: string;
    otherLanguages: string;
    subjects: string[];

    constructor({
        id,
        firstName,
        lastName,
        email,
        password,
        adminStatus,
        profilePictureLink,
        verifiedStatus,
        averageRatings,
        classes,
        description,
        price,
        times,
        mainLanguages,
        preferInPerson,
        cvLink,
        otherLanguages,
        subjects
    }: {
        id: number,
        firstName: string,
        lastName: string,
        email: string,
        password: string,
        adminStatus: boolean,
        profilePictureLink: string,
        verifiedStatus: boolean,
        averageRatings: number,
        classes: string,
        description: string,
        price: number,
        times: string[],
        mainLanguages: string,
        preferInPerson: boolean,
        cvLink: string,
        otherLanguages: string,
        subjects: string[]
    }) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.adminStatus = adminStatus;
        this.profilePictureLink = profilePictureLink;
        this.verifiedStatus = verifiedStatus;
        this.averageRatings = averageRatings;
        this.classes = classes;
        this.description = description;
        this.price = price;
        this.times = times;
        this.mainLanguages = mainLanguages;
        this.preferInPerson = preferInPerson;
        this.cvLink = cvLink;
        this.otherLanguages = otherLanguages;
        this.subjects = subjects;
    }

    static fromJSON(json): TutorModel {
        console.log("json:",json)

        return new TutorModel({
            id: json['user']['id'],
            firstName: json['user']['first_name'],
            lastName: json['user']['last_name'],
            email: json['user']['email'],
            password: json['user']['password'],
            adminStatus: json['user']['admin_status'],
            profilePictureLink: json['profile_picture_link'],
            verifiedStatus: json['user']['verified_status'],
            averageRatings: json['average_ratings'],
            classes: json['classes'],
            description: json['description'],
            price: json['price'],
            times: json['times'],
            mainLanguages: json['main_languages'],
            preferInPerson: json['prefer_in_person'],
            cvLink: json['cv_link'],
            otherLanguages: json['other_languages'],
            subjects: json['topics'].map(topic => topic.name)
            
        });
    }
}
