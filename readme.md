# Fuck You Stale Bot

Stale bot is a GitHub bot account which through a GitHub App integration can be
enabled for a repo by its maintainers and then watch issues and PRs and close
them if they have seen no activity from the maintainers after a period of time.

I have an issue with this bot, mainly because it is annoying and insulting to
spent time trying to improve someone else's project and then find that they
decided to solve their inability to stay on top of their issue backlog by not
ignoring the outstanding issues like a decent person would, but closing them,
punishing the issue reporter / PR author for actions (or rathen an inaction) of
the maintainer.

To add insult to the injury, this bot seems to be used mainly by open source
projects of big corps where the maintainers do actually get paid to work on the
project, yet seem to struggle to find them time to triage issues in a timely
manner.

Now for a disclaimer: I don't fault the maintainers here for their lack or time
or ability to triage issues in a reasonable amount of time. Being an open source
maintainer is hard, whether or not you have corporate backing. No one is entitled
to anyone else's time they are not paying for in open source.

What I do not like is the impersonal, rude and extremely unnecessary hostility
the Stale bot introduces into the process.

Can't keep up with your backlog? Welcome to the club! Who can?

Sending a bot to tell other people just trying to be helpful their contribution
has been promoted from ignored-for-now to abandoned-without-a-word? That sucks!

## What Is This?

At the moment, I am experimenting with seeing whether the Stale bot can be
monitored using the GitHub API. A quick look suggests it should be possible
using the `https://api.github.com/users/stale[bot]/events` GitHub API endpoint.

The next step could be either creating an anti-bot which would tell the Stale
bot to go fuck itself on each issue the Stale bot ruins, or perhaps a script
which creates an issue in this repo and merely links the ruined issue from it
so that it is less disturbing to the watchers of the original issue (creating no
notification), or perhaps there is no next step. As much as the Stale bot sucks
and is annoying, creating more hurt in the world is not a way forward. The
maintainers of the repositories in question did activate the Stale bot for a
reason and as much as I might disagree with that reason, I have no right to
vandalize their repos for it.

So, what is this? Not much really. Just a script which watches the Stale bot
and reports its acts for me to shake my head at. I am curious how much damage it
causes, but I don't think there is a way forward which is less complicated than
all the reasons that lead to the existence of the Stale bot in the first place.

## What Has The Stale Bot Ruined Most Recently

Everything. (I have not yet set up CI which updates this readme regularly.)

<!-- data -->
<!-- /data -->

## Running

`node .`

## To-Do

### Set up CI which updates the readme with Stale bot's damaging actions
