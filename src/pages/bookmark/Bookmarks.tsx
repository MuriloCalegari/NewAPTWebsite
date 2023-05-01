import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStores } from '@/hooks/useStores';
import { Panel, PanelGroup, Progress } from "rsuite";
import { chapters } from '../textbook/chapters/chapters';

const Bookmarks = () => {
    const navigate = useNavigate();

    const { textbookStore } = useStores();
    const { bookmarks } = textbookStore;

    function getTitle(path) {
        const pathParts = path.split('/');
        const pageId = pathParts[pathParts.length - 1];

        for (const chapter of chapters) {
            for (const part of chapter.parts) {
                if (part.id === pageId) {
                    return part.title;
                }
            }
        }

        return null;
    }

    return (
        <div className="bookmark-main">
            <div className="bookmark-title" style={{ marginLeft: '0px', marginBottom: '20px' }}>
                Bookmarks
            </div>
            <Panel className="section">
                {bookmarks.length > 0 ? (
                    <ul style={{ margin: 0, padding: 0 }}>
                        <div className="bookmarks-list">
                            {
                                bookmarks.map((item, index) => (
                                    <button className="bookmark-button" key={index} onClick={() => { navigate(item) }}>{`${index + 1}. ${getTitle(item)}`}</button>
                                ))
                            }
                        </div>

                    </ul>)
                    : (
                        <b>No bookmarks.</b>
                    )}

            </Panel>
        </div>
    );
};

export default Bookmarks;
