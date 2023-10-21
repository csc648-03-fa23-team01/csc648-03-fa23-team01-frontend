export class TutorProfile {
    classes: string;
    average_ratings: number;
    price: number;
    main_languages: string;
    prefer_in_person: boolean;
    other_languages: string;
    user_id: number;
    description: string;
    times_available: string;
    cv_link: string;
    profilePicture: string;
    name: string;
    subjects: string[];
    constructor({
        classes,
        average_ratings,
        price,
        main_languages,
        prefer_in_person,
        other_languages,
        user_id,
        description,
        times_available,
        cv_link,
        profilePicture,
        name,
        subjects
    }: {
        classes: string,
        average_ratings: number,
        price: number,
        main_languages: string,
        prefer_in_person: boolean,
        other_languages: string,
        user_id: number,
        description: string,
        times_available: string,
        cv_link: string,
        profilePicture: string,
        name: string,
        subjects: string[]
    }) {
        this.classes = classes;
        this.average_ratings = average_ratings;
        this.price = price;
        this.main_languages = main_languages;
        this.prefer_in_person = prefer_in_person;
        this.other_languages = other_languages;
        this.user_id = user_id;
        this.description = description;
        this.times_available = times_available;
        this.cv_link = cv_link;
        this.name = name;
        this.profilePicture = profilePicture;
        this.subjects = subjects;
    }

    static fromJSON(json: any): TutorProfile {
        return new TutorProfile({
            classes: json['classes'],
            average_ratings: json['average_ratings'],
            price: json['price'],
            main_languages: json['main_languages'],
            prefer_in_person: json['prefer_in_person'],
            other_languages: json['other_languages'],
            user_id: json['user_id'],
            description: json['description'],
            times_available: json['times_available'],
            cv_link: json['cv_link'],
            name: json['user']['first_name'] + " " + json['user']['last_name'],
            profilePicture: json['user']['profile_picture_link'],
            subjects: json['topics'].map(topic => topic.name)
        });
    }

}
