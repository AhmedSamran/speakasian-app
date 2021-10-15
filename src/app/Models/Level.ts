import { LearningLanguage } from './LearningLanguage';

export class Level {
    private levelId: number;
    private levelName: string;
    private languageToStudy: LearningLanguage[]; // FK

    constructor() {}

    public set LevelId(levelId: number) {
        this.levelId = levelId;
    }

    public get LevelId(): number {
        return this.levelId;
    }

    public set LevelName(levelName: string) {
        this.levelName = levelName;
    }

    public get LevelName(): string {
        return this.levelName;
    }

    public set LanguageToStudy(languageToStudy: LearningLanguage[]) {
        this.languageToStudy = languageToStudy;
    }

    public get LanguageToStudy(): LearningLanguage[] {
        return this.languageToStudy;
    }
}
