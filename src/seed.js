export function seedDatabase(firebase) {
    
  const users = [
    {
      userId: 'NvPY9M9MzFTARQ6M816YAzDJxZ72',
      username: 'karl',
      fullName: 'Karl Hadwen',
      emailAddress: 'karlhadwen@gmail.com',
      following: ['2'],
      followers: ['2', '3', '4'],
      dateCreated: Date.now()
    },

    {
      userId: '2',
      username: 'raphael',
      fullName: 'Raffaello Sanzio da Urbino',
      emailAddress: 'raphael@sanzio.com',
      following: [],
      followers: ['NvPY9M9MzFTARQ6M816YAzDJxZ72'],
      dateCreated: Date.now()
    },

    {
      userId: '3',
      username: 'dali',
      fullName: 'Salvador Dalí',
      emailAddress: 'salvador@dali.com',
      following: [],
      followers: ['NvPY9M9MzFTARQ6M816YAzDJxZ72'],
      dateCreated: Date.now()
    },