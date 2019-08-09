const recommendationList = [
    {
        name: 'question-1',
        recommendations: [
            {
                name: 'recommendation-1',
                offer: 'Рекомендуем каждую страницу работы скреплять без использования файлов',
                weight: 0
            },
            {
                name: 'recommendation-2',
                offer: null,
                weight: 1.5
            }
        ]
    },
    {
        name: 'question-2',
        recommendations: [
            {
                name: 'recommendation-1',
                offer: null,
                weight: 0
            },
            {
                name: 'recommendation-2',
                offer: 'Рекомендуем все листы работы вложить в твёрдую папку',
                weight: 1.5
            }
        ]
    },
    {
        name: 'question-3',
        recommendations: [
            {
                name: 'recommendation-1',
                offer: null,
                weight: 0
            },
            {
                name: 'recommendation-2',
                offer: 'Рекомендуем весь текст работы оформить шрифтом Times New Roman, 14 кегль, с интервалом 1,5',
                weight: 1.5
            }
        ]
    }
];

export default recommendationList;