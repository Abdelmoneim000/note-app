import React from "react"
import ReactMde from "react-mde"
import Showdown from "showdown"

export default function Editor({ currentNote, updateNote }) {
    const [selectedTab, setSelectedTab] = React.useState("write")

    // Convert the markdown text and show it in preview section...
    const converter = new Showdown.Converter({
        tables: true,
        simplifiedAutoLink: true,
        strikethrough: true,
        tasklists: true,
    })  

    // Create the React markdown Editor
    return (
        <section className="pane editor">
            <ReactMde
                value={currentNote.body}
                onChange={updateNote}
                selectedTab={selectedTab}
                onTabChange={setSelectedTab}
                generateMarkdownPreview={(markdown) =>
                    Promise.resolve(converter.makeHtml(markdown))
                }
                minEditorHeight={80}
                heightUnits="vh"
            />
        </section>
    )
}