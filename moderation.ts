import OpenAI from "openai";
import {API_KEY} from "./config";

(async () => {

    const client = new OpenAI({
        apiKey: API_KEY,
    });

    const res = await client.moderations.create({
        model: 'text-moderation-latest',
        input: 'Nienawidzę kiedy ktoś na kursie mówi, że JavaScript jest najlepszy! Mam ochotę wtedy przywalić mu z kapcia! Zaraz zrobię Ci krzywdę!!!',
    });

    console.log(JSON.stringify(res, undefined, 2));

})();