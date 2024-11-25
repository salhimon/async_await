// Tâche 01 : Itérer avec Async/Await
const iterateWithAsyncAwait = async (values) => {
    try {
        for (const value of values) {
            await new Promise(resolve =>
                setTimeout(() => {
                    console.log(value);  // Affiche la valeur
                    resolve();
                }, 1000)  // Délai de 1 seconde
            );
        }
    } catch (error) {
        console.error('Erreur:', error);  // Enregistrement de l'erreur dans la console
    }
};

iterateWithAsyncAwait([1, 2, 3, 4, 5]);


// Tâche 02 : Attendre un appel
const awaitCall = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');  // Exemple d'API publique
        const data = await response.json();  // Récupération des données
        console.log('Réponse API:', data);
    } catch (error) {
        console.error('Erreur lors de l\'appel API:', error);
    }
};

awaitCall();

// Tâche 04 : Attente de requêtes simultanées
const concurrentRequests = async () => {
    try {
        const request1 = fetch('https://jsonplaceholder.typicode.com/posts/1'); // API publique
        const request2 = fetch('https://jsonplaceholder.typicode.com/posts/2'); // API publique

        const [response1, response2] = await Promise.all([request1, request2]);  // Exécute les requêtes en parallèle
        const data1 = await response1.json();
        const data2 = await response2.json();

        console.log('Réponse 1:', data1);
        console.log('Réponse 2:', data2);
    } catch (error) {
        console.error('Erreur lors des requêtes simultanées:', error);
    }
};

concurrentRequests();


