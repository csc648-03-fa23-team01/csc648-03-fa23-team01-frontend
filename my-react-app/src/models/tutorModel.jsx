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
        cv_link
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
        cv_link: string
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
            cv_link: json['cv_link']
        });
    }

    toJSON() {
        return {
            classes: this.classes,
            average_ratings: this.average_ratings,
            price: this.price,
            main_languages: this.main_languages,
            prefer_in_person: this.prefer_in_person,
            other_languages: this.other_languages,
            user_id: this.user_id,
            description: this.description,
            times_available: this.times_available,
            cv_link: this.cv_link,
        };
    }
}
