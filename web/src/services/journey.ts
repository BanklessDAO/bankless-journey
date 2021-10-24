
import fs from 'fs'
import { join } from 'path'
import { Journey } from 'types'

const baseFolder = 'src/journeys'

export function getJourneyNames(): Array<string> {
    const dir = join(process.cwd(), baseFolder)
    const dirs = fs.readdirSync(dir, { withFileTypes: true })
        .filter(i => i.isFile() && i.name.endsWith('.json'))
        .map(i => i.name.replace('.json', ''))

    return dirs
}

export function getJourneys(): Array<Journey> {
    const dir = join(process.cwd(), baseFolder)
    const files = fs.readdirSync(dir, { withFileTypes: true })
        .filter(i => i.isFile() && i.name.endsWith('.json'))

    const items = files.map(i => {
        const fullPath = join(dir, i.name)
        const content = fs.readFileSync(fullPath, 'utf8')
        if (!content) {
            console.log('File has no content..', i.name)
        }
        
        if (content) {
            let journey = JSON.parse(content) as Journey 
            return {
                ...journey,
                id: i.name.replace('.json', '')
            }
        }
    }).filter(i => !!i) as Array<Journey> 
    
    return items
}