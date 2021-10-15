export class LearningLanguage {
    private languageId: number;
    private languageName: string;

    constructor() {}

    public set LanguageId(languageId: number) {
        this.languageId = languageId;
    }

    public get LanguageId(): number {
        return this.languageId;
    }

    public set LanguageName(languageName: string) {
        this.languageName = languageName;
    }

    public get LanguageName(): string {
        return this.languageName;
    }
}
