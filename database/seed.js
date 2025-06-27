import { faker } from '@faker-js/faker'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(process.env.VITE_SUPABASE_URL, process.env.SERVICE_ROLE_KEY)

async function seedProjects(numEntries) {
  try {
    await supabase.from('projects').insert(createProjects(numEntries))
  } catch (error) {
    console.error(error)
  }
}

function createProjects(numEntries) {
  const projects = []

  for (let i = 0; i < numEntries; i++) {
    const name = faker.lorem.words(3)

    projects.push({
      name: name,
      slug: name.toLocaleLowerCase().replace(/ /g, '-'),
      description: faker.lorem.words(12),
      status: faker.helpers.arrayElement(['in-progress', 'completed', 'cancelled']),
      collaborators: faker.helpers.arrayElements([1, 2, 3]),
    })
  }

  return projects
}

await seedProjects(10)
